"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4">
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between 
        px-6 py-3 rounded-2xl
        bg-black/60 backdrop-blur-xl
        border border-white/10
        shadow-lg relative overflow-hidden"
      >
        {/* soft glow background (NOT over text) */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 opacity-40 pointer-events-none"></div>

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 relative z-10">
          <Image
            src="/assets/Wanderlast.png"
            height={150}
            width={150}
            alt="logo"
            className="rounded-full  "
          />

          
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-2 relative z-10">
          {[
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
            { name: "Bookings", path: "/my-bookings" },
            { name: "Add destination", path: "/add-destination" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="px-4 py-2 rounded-full text-sm
                text-white/80 hover:text-white
                hover:bg-white/10 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* BUTTONS */}
        <div className="flex items-center gap-2 relative z-10">
          <Link href="/login">
            <Button className="rounded-full px-4 text-sm bg-white/10 text-white border border-white/10 hover:bg-white/20">
              Login
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="rounded-full px-4 text-sm bg-cyan-500 text-white hover:bg-cyan-400 transition">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;