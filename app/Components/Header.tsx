import React from "react";
import Image from "next/image";
import Paste from "./images/paste.svg";
import Tiret from "./images/tiret.svg";
import User from "./images/icon(1).svg";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { CommandDemo } from "./command";

const Header = () => {
  return (
    <nav className="fixed bg-[#121212] h-[85px] right-0 left-0 flex justify-center items-center text-[14px] gap-[60px] border-b border-b-1 border-white/15">
      <Image src={Paste} alt="Paste Logo" />

      <Image src={Tiret} alt="Tiret" />

      <div className="">Library</div>
      <div className="text-[#7E7F81] transition-text duration-300 hover:text-white cursor-pointer">Extensions</div>
      <div className="text-[#7E7F81] transition-text duration-300 hover:text-white cursor-pointer">Community</div>
      <div className="text-[#7E7F81] transition-text duration-300 hover:text-white cursor-pointer">Membership</div>

      <Image src={Tiret} alt="Tiret" />

      {/* Search Input */}
        <CommandDemo/>


      <Image src={Tiret} alt="Tiret" />

      {/* Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="bg-[#151515] hover:bg-[#1d1d1d] transition-bg duration-300 border border-1 border-[#1d1d1d] text-white rounded hover:bg-gray-800 pt-[10px] pb-[10px] px-[13px] focus:outline-1 focus:outline-orange-500 focus:ring-2 focus:ring-orange-500">
            <Image src={User} alt="User Icon" height={16} width={16} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#151515] text-xhite border-[#1d1d1d] rounded-sm">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#1d1d1d]" />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Header;
