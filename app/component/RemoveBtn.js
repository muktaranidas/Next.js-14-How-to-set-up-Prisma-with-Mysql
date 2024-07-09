"use client";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
export default function RemoveBtn({id}){
    console.log({id})
    const router = useRouter()
    const removeFav = async ( ) => {
        const confirmed = confirm("Are you sure?")
   
    if(confirmed){
        const res = await fetch(`http://localhost:3000/api/users?id=${id}`, {
            method:"DELETE",
        })

        if(res.ok){

            router.refresh() 
        }


    } }
    return(<>
    <MdDelete onClick={removeFav} className="text-red-400" size={24}  />
    </>)
}