import NavBar from "@/components/common/Nav";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default layout;
