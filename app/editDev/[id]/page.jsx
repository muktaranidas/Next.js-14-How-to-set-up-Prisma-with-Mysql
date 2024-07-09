export default function editDev(){
    return (
    <form className=" flex flex-col gap-3">
        <input  className="border border-slate-500 py-2 px-8" type="text" placeholder="Edit Name"/>
        <input  className="border border-slate-500 py-2 px-8" type="text" placeholder="Edit Email"/>
        <button className="bg-pink-400 font-bold text-white w-fit p-4">Edit Developer</button>

       
    </form>
    )
}