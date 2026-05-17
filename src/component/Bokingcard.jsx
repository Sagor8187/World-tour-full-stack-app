"use client"
import { FieldError, InfoIcon, Input, Label, TextField } from "@heroui/react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { authClient } from "../lib/auth-client";
import { useState } from "react";
import { headers } from "next/headers";
import { auth } from "../lib/auth";

export default function Bokingcard({ data }) {
     const { data: session } = authClient.useSession()
     const info = session?.user;
    //  console.log(info)
    const{email,name,id}=info || {}
    // console.log(email,name,id)
    // console.log(data)
    const {category,country,description,destinationName,duration,imageUrl,price,_id}=data
    const[date,setdate]=useState("")
   
    const handlebook = async ()=>{
        const bookdata={
            userId:id,
            userName:name,
            userEmail:email,
            destinationId:_id,
            destinationPrice:price,
            country,
            category,
            departureDate:date,
            imageUrl


        }
       const {token} = await auth.api.getToken({
            headers:await headers()
         })
        
        const res = await fetch("http://localhost:5000/booking",{
            method:"POST",
            headers:{
                "content-type":"application/json",
                authorization:`bearer ${token}`
                 
            },
            body:JSON.stringify(bookdata)
        })
        const output = await res.json()

        return output
    }
    
  return (
    <div>
      <div className="w-full space-y-4  rounded-xl  p-10 font-sans flex flex-col min-h-[650px]">
        {/* Price Section */}
        <div className="mb-6">
          <span className="text-gray-500 text-lg block mb-1">
            Starting from
          </span>

          <div className="flex items-baseline font-bold text-xl text-cyan-500">
            <span className="px-4 py-2 rounded-full">${price}</span>
          </div>

          <span className="text-gray-500 text-lg block mt-1">per person</span>
        </div>

        {/* Date Input */}
        <div className="mb-6">
          <TextField name="departureDate" type="date" isRequired>
            <Label>Departure Date</Label>
            <Input onChange={(e) => setdate(e.target.value)} type="date" className="rounded-2xl" />
            <FieldError />
          </TextField>
        </div>

        {/* Book Button (NOW FIXED 100%) */}
        <button onClick={handlebook} className="w-full bg-cyan-500 hover:bg-cyan-700 text-white font-semibold text-xl py-4 px-6 rounded-md flex items-center justify-center gap-2 transition-colors mb-6 group">
          <span>Book Now</span>
          <FaArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
        </button>

        {/* Features */}
        <div className="space-y-4 ">
          <div className="flex items-center gap-3">
            <FaCheck className="text-green-500 mt-1 shrink-0" />
            <span className="text-gray-600 text-sm">
              Free cancellation up to 7 days
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaCheck className="text-[#28a745] mt-1 shrink-0" />
            <span className="text-gray-600 text-sm">
              Travel insurance included
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaCheck className="text-[#28a745] mt-1 shrink-0" />
            <span className="text-gray-600 text-sm">24/7 customer support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
