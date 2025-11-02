"use client";

import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useState } from "react";

function UserSyncWrapper({ children }: { children: React.ReactNode }) {
  const { user, isLoaded: isUserLoaded } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  //convex mutation to sync user
  const createOrUpdateUser = useMutation(api.users.upsertUser);

  if (!isUserLoaded || isLoading) {
    return (
      <LoadingSpinner
        size="lg"
        message={!isUserLoaded ? "Loading..." : "Syncyning User Data..."}
        className="min-h-screen"
      />
    );
  }
  return <div>{children}</div>;
}

export default UserSyncWrapper;
