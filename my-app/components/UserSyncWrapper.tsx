"use client";

import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useCallback, useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import streamClient from "@/lib/stream";
import { createToken } from "@/action/createToken";

function UserSyncWrapper({ children }: { children: React.ReactNode }) {
  const { user, isLoaded: isUserLoaded } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Convex mutation to sync user
  const createOrUpdateUser = useMutation(api.users.upsertUser);

  const syncUser = useCallback(async () => {
    if (!user?.id) return;
    try {
      setIsLoading(true);
      setError(null);

      const tokenProvider = async () => {
        if (!user?.id) {
          throw new Error("User is not authenticated");
        }
        const token = await createToken(user.id);
        return token;
      };

      // 1. Save user to Convex
      await createOrUpdateUser({
        userId: user.id,
        name:
          user.fullName ||
          user.firstName ||
          user.emailAddresses[0]?.emailAddress ||
          "Unknown user",
        email: user.emailAddresses[0]?.emailAddress || "",
        imageUrl: user.imageUrl || "",
      });

      // 2. Connect user to Stream
      await streamClient.connectUser(
        {
          id: user.id,
          name:
            user.fullName ||
            user.firstName ||
            user.emailAddresses[0]?.emailAddress ||
            "Unknown user",
          image: user.imageUrl || "",
        },
        tokenProvider
      );
    } catch (err: any) {
      console.error(err);
      setError("Failed to sync user data");
    } finally {
      setIsLoading(false);
    }
  }, [createOrUpdateUser, user]);

  const disconnectUser = useCallback(async () => {
    try {
      await streamClient.disconnectUser();
    } catch (error) {
      console.error("failed to disconnect user", error);
    }
  }, []);

  useEffect(() => {
    if (!isUserLoaded) return;
    if (user) {
      syncUser();
    } else {
      disconnectUser();
      setIsLoading(false);
    }
    //cleanup function
    return () => {
      if (user) {
        disconnectUser();
      }
    };
  }, [user, isUserLoaded, syncUser, disconnectUser]);

  useEffect(() => {
    if (isUserLoaded && user) {
      syncUser();
    }
  }, [isUserLoaded, user, syncUser]);

  if (!isUserLoaded || isLoading) {
    return (
      <LoadingSpinner
        size="lg"
        message={!isUserLoaded ? "Loading..." : "Syncing User Data..."}
        className="min-h-screen"
      />
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-500">
        <div>{error}</div>
        <p> please try restarting the app</p>
      </div>
    );
  }

  return <div>{children}</div>;
}

export default UserSyncWrapper;
