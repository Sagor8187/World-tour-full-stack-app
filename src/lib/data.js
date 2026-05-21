import { headers } from "next/headers";
import { auth } from "./auth";

 export const mydata = async ()=>{
 const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/destination`,{
   headers:{
      authorization:`login`
   }
 });
    const data =await res.json()
    return data
 }

 
  export const detailsdata = async (id)=>{
   const {token} = await auth.api.getToken({
      headers:await headers()
   })
 
 const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/destination/${id}`,{
   headers:{
      authorization:`bearer ${token}`
   }
 });
    const data =await res.json()
    return data
 }

