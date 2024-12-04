import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

function NavBar() {
  return (
    <>
      <div className=" w-screen h-16 items-center justify-center flex ">
        <div className=" flex justify-between w-full">
          LOGO
          <div className=" flex gap-5">
            <Link href={"/"} >Home</Link>

            <Link href={"/"}>History</Link>

            <Link href={"/"}>Explore</Link>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
}

export default NavBar;
