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

const rootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default rootLayout;
