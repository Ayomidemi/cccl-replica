import React from "react";
import { Navigation } from "@/components/layout/Navigation";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default PagesLayout;
