"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
export default function editDev({email,name,params}){
    const {id} = params;
    const [newName, SetNewName] = useState(name)
    const [newEmail, setNewEmail] = useState(email)
    const router = useRouter()
    console.log({router})
    const getDevelopers = async() => {
        try{
            const res = await fetch(`http://localhost:3000/api/users/${id}`);
            const resData = await res.json();
            if(!resData.user) throw new Error("failed to fatch data")
            SetNewName(resData.user.name)
            setNewEmail(resData.user.email)
         
        }catch(error){
            console.log("Error loading davs:", error)
        }
    }

    useEffect(()=>{
        getDevelopers()
    },[])

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const res = await fetch(`http://localhost:3000/api/users/${id}` , {
                method:"PUT",
                headers:{
                    "Content-type": "application/json",
                },
                body: JSON.stringify({newName, newEmail})
            }); 
            console.log(res )
            if(!res.ok){
                throw new Error("Failed to update dev")
            }
            router.push("/")
            router.refresh()
        }
        catch(error){
            console.log(error);
        }
    }
    return (
    <form onSubmit={handleSubmit} className=" flex flex-col gap-3 ">
        <input onChange={(e) => SetNewName(e.target.value)} value={newName}  className="border border-slate-500 py-2 px-8" type="text"/>
        <input  onChange={(e) => setNewEmail(e.target.value)} value={newEmail}   className="border border-slate-500 py-2 px-8" type="text"/>
        <button className="bg-pink-400 font-bold text-white w-fit p-4">Edit Developer</button>
    </form>
    )
}