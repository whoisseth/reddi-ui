/** @format */

import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, QrCode } from "lucide-react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { ModeToggle } from "./toggle-darkmode";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="py-3 border-b flex justify-between gap-2 ">
      {/* logo */}
      <Link href={"/"} className="flex items-center gap-1 text-2xl min-w-28 ">
        <img className="h-8 w-auto" src={"/redditLogo.svg"} alt="" />

        <p className="font-bold text-[#FF4500] "> reddit </p>
      </Link>

      {/* seachbar */}
      <div className="w-full max-w-[700px] flex items-center relative ">
        <Search size={20} className=" absolute left-3  text-muted-foreground" />
        <Input
          className=" w-full pl-10 focus-visible:ring-orange-600"
          placeholder="Search"
        />
      </div>

      {/* buttons */}

      <div
        className="flex items-center gap-2
      "
      >
        <ModeToggle />
        <Button
          variant="secondary"
          className=" gap-2  hidden md:flex transition-all "
        >
          <QrCode size={20} className="" />
          Get app
        </Button>
        <Button className="bg-[#D93A14] hover:bg-[#D93A14]/80">Log In</Button>

        <Popover>
          <PopoverTrigger>
            <Button variant="secondary" className="w-10 h-10 p-2">
              <PiDotsThreeOutlineFill />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end">
            Place content for the popover here.
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
