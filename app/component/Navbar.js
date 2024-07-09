import Link from "next/link";
export default function Navbar(){
    return (<>
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 ">
        <Link  href={"/"} className="text-white font-bold" >Elitbuzz</Link>
        <Link href={"/addDev"}  className="bg-white font-bold p-2" >Add Developer</Link>
    </nav>
    </>)
}