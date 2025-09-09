"use client";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#004230] border-b border-white/10">
      <div className="flex justify-between items-center px-6 md:px-10 py-6 ">
       
       <h1 className="text-3xl font-extrabold  md:hidden flex">Better</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {/* Logo */}
          <h1 className="text-3xl font-extrabold">Better</h1>

          <div className="text-lg space-x-9 font-medium  justify-center items-center flex">
            
          <Link href="/">Home</Link>
        <Link href="/about" >About Us</Link>
        <Link href="/mortage">Mortgage Calculator</Link>
          <Link href="/startPage">Start Page</Link>
        <Link href="/contact">Contact Us</Link>
          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex p-2 rounded-full bg-white/10 hover:bg-white/20">
            <Phone size={18} />
          </button>
          <button className="hidden md:block hover:underline">Sign in</button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-800 flex flex-col items-center space-y-4 py-6 text-lg font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/mortage">Mortgage Calculator</Link>
          <Link href="/startPage">Start Page</Link>
        <Link href="/contact">Contact Us</Link>
          <button className="flex items-center gap-2">
            <Phone size={18} /> Call Us
          </button>
          <button className="hover:underline">Sign in</button>
        </div>
      )}
    </header>
  );
}
