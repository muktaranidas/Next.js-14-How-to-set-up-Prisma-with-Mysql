"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function AddDev(){
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const router =useRouter()
    const  handleSubmit =async (e)=>{
        e.preventDefault();
        if(!name || !email){
            alert("name and email are required")
            return;
        }
        try{
            const res = await fetch("http://localhost:3000/api/users" , {
                method:"POST",
                headers:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify({name,email})
            })
            if(res.ok){
                router.push("/")
                router.refresh() 
            }else{
                throw new Error ("Failed to create a topic")
            }
        }
            catch(error){
                }
    }
    return (
        <form onSubmit={handleSubmit}  action="" className="flex flex-col gap-2">
        <input onChange={(e) => setName(e.target.value) } value= {name} className="border border-slate-500 px-8 py-2" type="text" placeholder="Fav Title" />
        <input onChange={(e) => setEmail(e.target.value) } value= {email} className="border border-slate-500 px-8 py-2" type="text" placeholder="Fav Description" />
        <button type="submit" className="bg-pink-500 font-bold text-white py-3 px-6 w-fit">Add Developer</button>
    </form>
    )
}