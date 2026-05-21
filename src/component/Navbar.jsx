"use client";

import { Button } from "@heroui/react";

import Link from "next/link";
import React from "react";
import { authClient } from "../lib/auth-client";

const Navbar = () => {
  const { data: session } = authClient.useSession()
  
  const handlesignout = async ()=>{
    await authClient.signOut();
  }

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
          <h1 className="text-2xl font-bold text-white bg-cyan-500 p-1 px-3 rounded-full">World <span>Tour</span></h1>
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
        {session?.user?<div className="flex justify-center gap-2 items-center">
         <h1 className="font-bold text-white">Welcome {session?.user?.name}</h1>
         {session?.user?.image?<img className="h-8 w-8 rounded-full" src={session?.user?.image} alt="image" />:<div></div>}
          <Button onClick={()=> handlesignout()} className="rounded-full px-4 text-sm bg-white/10 text-white border border-white/10 hover:bg-white/20">
              Login out
            </Button>
        </div>: <div className="flex items-center gap-2 relative z-10">
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
        </div>}
       
      </nav>
    </header>
  );
};

export default Navbar;