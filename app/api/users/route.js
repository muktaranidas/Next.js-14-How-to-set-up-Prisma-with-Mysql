import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function POST(request){
    const {name,email} = await request.json()
    const newUser = await prisma.user.create({
        data: {name,email}
    })
    return NextResponse.json(newUser)
}
export async function GET(){
    const developers = await prisma.user.findMany()
    return NextResponse.json(developers)
}
export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id")
    console.log(typeof id)
    await prisma.user.delete({where:{id:parseInt(id)}}) 
    return NextResponse.json({message: "Dev is deleted successfully"}, {status:200})
} 