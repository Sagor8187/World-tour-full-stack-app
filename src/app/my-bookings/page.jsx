
import { FaRegCalendarDays, FaRegTrashCan } from "react-icons/fa6";
import { IoPricetagOutline, IoEyeOutline } from "react-icons/io5";
import { AiFillCheckCircle } from "react-icons/ai";
import { auth } from "../../lib/auth";
import { headers } from "next/headers";
import Deletebtn from "@/src/component/Deletebtn";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

 const {token} = await auth.api.getToken({
      headers:await headers()
   })
   console.log(token)

   const res = await fetch(
  `${process.env.NEXT_PUBLIC_URL}/booking/${session?.user?.id}`,
  {
    headers: {
      authorization: `bearer ${token}`,
    },
  }
);

  // const res = await fetch(
  //   `http://localhost:5000/booking/${session?.user?.id}`,{
  //     ,{
  //     headers:{
  //        authorization:`bearer ${token}`
  //     }
  //   }
  // );

  const data = await res.json();

  console.log(data);

  if (!data?.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        No booking details found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mt-20 mx-auto p-4 bg-gray-50/50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        My Bookings
      </h1>

      <div className="space-y-6">
        {data?.map((item) => (
          <div
            key={item?._id}
            className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-sm overflow-hidden p-6 gap-6 shadow-sm"
          >
            {/* IMAGE */}
            <div className="relative w-full md:w-[320px] h-[200px] md:h-[180px] flex-shrink-0 rounded-sm overflow-hidden">
              <img
                src={item?.imageUrl}
                alt={item?.country}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-between flex-grow">
              <div className="space-y-2">
                {/* STATUS */}
                <div className="inline-flex items-center gap-1 bg-green-50 text-green-600 px-2.5 py-0.5 rounded-full text-xs font-medium border border-green-100">
                  <AiFillCheckCircle className="text-[13px]" />
                  <span>Confirmed</span>
                </div>

                {/* TITLE */}
                <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
                  {item?.country}
                </h2>

                {/* DATE & ID */}
                <div className="space-y-1.5 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <FaRegCalendarDays className="text-gray-400 text-[14px]" />
                    <span>
                      Departure: {item?.departureDate}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <IoPricetagOutline className="text-gray-400 text-[15px]" />
                    <span>
                      Booking ID: {item?._id?.substring(0, 6)}
                    </span>
                  </div>
                </div>
              </div>

              {/* PRICE + BUTTONS */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4 pt-4 border-t border-gray-50 md:border-t-0 md:pt-0">
                
                <div className="text-2xl font-bold text-cyan-600">
                  ${item?.destinationPrice}
                </div>

                <div className="flex items-center gap-3">
                  <Deletebtn id={item?._id}></Deletebtn>

                  <button className="flex items-center justify-center gap-1.5 px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white transition-colors text-sm font-medium rounded-sm shadow-sm">
                    <IoEyeOutline className="text-[16px]" />
                    View
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}