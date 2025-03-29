"use client";
import { useClerk } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const { signOut } = useClerk();
  return (
    <Button
      variant={"outline"}
      className="w-fit bottom-0 gap-2 px-0 md:px-4"
      onClick={() => signOut({ redirectUrl: "/sign-in" })}
    >
      <LogOut />
      <span className="hidden md:block">Logout</span>
    </Button>
  );
};

export default LogoutButton;
