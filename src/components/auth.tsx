"use client";

import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";
import { Button } from "./ui/button";

export const Auth = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return (
      <SignOutButton>
        <Button variant="outline">Sign Out</Button>
      </SignOutButton>
    );
  }

  return (
    <SignInButton mode="modal">
      <Button variant="outline">Sign In</Button>
    </SignInButton>
  );
};
