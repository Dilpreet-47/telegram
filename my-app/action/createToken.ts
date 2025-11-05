"use server";

import { serverClient } from "@/lib/streamServer";

export async function createToken(userId: string) {
  // Assuming serverClient.createTokenForUser returns a string
  const token = serverClient.createToken(userId);
  console.log("Creating token from user", userId);
  return token; // This should be a string or a plain object, not a class instance!
}
