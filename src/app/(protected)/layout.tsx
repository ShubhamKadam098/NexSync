import StreamVideoProvider from "@/providers/StreamClientProviders";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "NexSync",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.png",
  },
};

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StreamVideoProvider>
      <main>{children}</main>
    </StreamVideoProvider>
  );
};

export default ProtectedLayout;
