import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center py-8">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
