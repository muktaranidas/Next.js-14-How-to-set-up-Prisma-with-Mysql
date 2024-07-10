import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export async function PUT(request, {params}){
    console.log("params" ,params)
    const {id} = params;
    console.log("id:" , id)
    const {newName: name, newEmail:email} = await request.json();
    const updateUser = await prisma.user.update({
        where: {
          id:parseInt(id)
        },
        data: {
          name: name,
          email:email,
        },
      })
    return NextResponse.json({message:"Dev Updated"} , 
        {status:200}
    )
}
export async function GET(request, {params}){
    const {id} = params;
    console.log({id})
    const user = await prisma.user.findFirst({where:{id:parseInt(id)}})
    return NextResponse.json({user} , { status:200})

}