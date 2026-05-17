"use client"
import {  FaRegTrashCan } from "react-icons/fa6";

export default function Deletebtn({id}) {
    const deletedata = async(id)=>{
        const res = await fetch(`http://localhost:5000/booking/${id}`,{
            method:"DELETE"
        })
        const data = await res.json()
        console.log(data)
    }
  return (
    <div>
        <button onClick={()=>deletedata(id)}  className="flex items-center justify-center gap-1.5 px-4 py-2 border border-red-200 text-red-500 hover:bg-red-50 transition-colors text-sm font-medium rounded-sm">
                            <FaRegTrashCan className="text-[14px]" />
                            Cancel
                          </button>
    </div>
  )
}
