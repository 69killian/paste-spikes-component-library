"use client"

import React, { useState } from "react";
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
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed bg-[#121212] h-[85px] right-0 left-0 flex justify-between sm:justify-between md:justify-between items-center px-4 lg:px-8 border-b border-white/15 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={Paste} alt="Paste Logo" height={96} width={96} />
      </div>

      <Image src={Tiret} alt="Tiret" className="hidden md:block" />
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-[20px] lg:gap-[30px] items-center">
        <div className="flex gap-10 justify-center">
        
            <div className="text-white">Library</div>
            <div className="text-[#7E7F81] transition duration-300 hover:text-white cursor-pointer">
            Extensions
            </div>
            <div className="text-[#7E7F81] transition duration-300 hover:text-white cursor-pointer">
            Community
            </div>
            <div className="text-[#7E7F81] transition duration-300 hover:text-white cursor-pointer">
            Membership
            </div>
        </div>
        <div className="">
            <Image src={Tiret} alt="Tiret" className="hidden lg:block" />
        </div>
        <CommandDemo />
      </div>

      <Image src={Tiret} alt="Tiret" className="hidden md:block" />

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[85px] left-0 w-full bg-[#121212] p-4 flex flex-col gap-4 text-white md:hidden">
          <div className="text-white">Library</div>
          <div className="text-[#7E7F81] transition duration-300 hover:text-white cursor-pointer">
            Extensions
          </div>
          <div className="text-[#7E7F81] transition duration-300 hover:text-white cursor-pointer">
            Community
          </div>
          <div className="text-[#7E7F81] transition duration-300 hover:text-white cursor-pointer">
            Membership
          </div>
          <CommandDemo />
        </div>
      )}

      {/* User Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className=" bg-[#151515] hover:bg-[#1d1d1d] transition duration-300 border border-[#1d1d1d] text-white rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
          <Image src={User} alt="User Icon" height={16} width={16} className="" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#151515] text-white border-[#1d1d1d] rounded-sm">
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
