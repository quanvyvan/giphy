import React, { ReactNode } from "react";
import Header from "./header";

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 text-white">
      <Header />
      {children}
    </div>
  );
}
