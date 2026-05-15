import { mydata } from "@/src/lib/data";
import Link from "next/link";
import { LuMapPin, LuCalendarDays } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
export default async function page() {

   
    const data =await mydata()

  return (
    <div className="mt-15">

<div className="max-w-7xl mx-auto p-6">
    <h2 className="text-xl font-bold my-3">All Destination</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
       
        {data.map((item) => (
          <div key={item._id} className="group overflow-hidden rounded-lg">
            
            {/* Image Section */}
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.destinationName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-sm font-bold shadow-sm">
                4.5 ★
              </div>
            </div>

            {/* Details Section */}
            <div className="py-4 space-y-2">
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <LuMapPin className="text-gray-400" />
                <span>{item.country}</span>
              </div>

              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold capitalize text-gray-800">
                  {item.destinationName} Paradise
                </h3>
                <div className="text-right">
                  <span className="text-xl font-bold text-gray-900">${item.price}</span>
                  <p className="text-[10px] text-gray-400 uppercase">/Person</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <LuCalendarDays className="text-gray-400" />
                <span>{item.duration}</span>
              </div>
<Link href={`/destinations/${item._id}`}><button className="flex items-center gap-1 text-cyan-600 font-bold text-sm tracking-widest mt-4 border-b-2 border-transparent hover:border-cyan-600 transition-all uppercase">
                Book Now <MdArrowOutward />
              </button></Link>
              
            </div>
          </div>
        ))}
        
      </div>
    </div>
    </div>
  )
}
