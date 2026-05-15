 export const mydata = async ()=>{
 const res = await fetch("http://localhost:5000/destination");
    const data =await res.json()
    return data
 }

  export const detailsdata = async (id)=>{
 const res = await fetch(`http://localhost:5000/destination/${id}`);
    const data =await res.json()
    return data
 }

