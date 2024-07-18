"use client";
import React from "react";

// import "@/stylesheets/main.scss";

// The layout file by default receives other files as children.
interface RootLayoutProps {
  children: React.ReactNode;
  session: any;
}

export default function RootLayout({ children, session }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
            <main>{children}</main>   
      </body>
    </html>
  );
}