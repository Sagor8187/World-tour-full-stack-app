import { Deletemodal } from "@/src/component/Deletemodal"
import { Editmodal } from "@/src/component/Editmodal"
import { detailsdata } from "@/src/lib/data"

export default async function Detailspage({params}) {
    const {id}= await params

    const data =await detailsdata(id)
    console.log(data)
  return (
    <div className="mt-15">
        <div className="flex justify-between mt-10">
            <div></div>
            <div className="flex justify-center gap-5">
                <Editmodal data={data}></Editmodal>
                <Deletemodal data={data}></Deletemodal>
            </div>
        </div>
               <div className="max-w-4xl mx-auto p-6">
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                
                <img
                    src={data.imageUrl}
                    alt={data.destinationName}
                    className="w-full h-[400px] object-cover"
                />

                <div className="p-6 space-y-4">

                    <h1 className="text-4xl font-bold capitalize">
                        {data.destinationName}
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Country: {data.country}
                    </p>

                    <div className="flex gap-4 flex-wrap">

                        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                            {data.category}
                        </span>

                        <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full">
                            ${data.price}
                        </span>

                    </div>

                    <div className="space-y-2 text-gray-700">

                        <p>
                            <span className="font-semibold">Duration:</span> {data.duration}
                        </p>

                        <p>
                            <span className="font-semibold">Departure Date:</span> {data.departureDate}
                        </p>

                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">
                            Description
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}
