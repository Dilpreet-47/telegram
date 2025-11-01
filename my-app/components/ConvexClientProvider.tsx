"use client";

import { useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";

import { ConvexProviderWithClerk } from "convex/react-clerk";

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error("missing NEXT_PUBLIC_CONVEX_URL from dotenv");
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

function ConvexClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </div>
  );
}

export default ConvexClientProvider;
