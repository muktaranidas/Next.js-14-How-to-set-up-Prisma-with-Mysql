import { FaEdit } from "react-icons/fa";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

const getDevelopers = async() => {
    
    try{
        const res = await fetch("http://localhost:3000/api/users" , {
            cache:"no-store"
        });
        console.log(res)
        if(!res.ok){
            throw new Error("failed to fatch data")
        }
     
        return res.json()
    }catch(error){
        console.log("Error loading davs:", error)
    }
}
export default async function DeveloperList(){
    const users = await getDevelopers();
    return(<>
    {
        users?.map((dev )=>( 
   <div key={dev.id} className="flex justify-between p-4  border border-slate-300 " >
   <div>
   <h1 className="font-bold text-2xl text-pink-900"> {dev.name}</h1>
   <p className="text-pink-600">{dev.email}</p>
   </div>
   <div className="flex gap-3 items-start">
    <RemoveBtn id={dev.id}></RemoveBtn>
    <Link href={`/editDev/${dev.id}`}> <FaEdit size={24} /></Link>
   </div>
   </div> 
   ))
    }
    </>)
}
