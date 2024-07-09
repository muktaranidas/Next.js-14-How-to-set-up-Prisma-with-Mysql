import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export async function POST(request){
    try{
    const {name,email} = await request.json()
    const newUser = await prisma.user.create({
        data: {name,email}
    })
    return NextResponse.json(newUser)
    }
    catch(err){
        return NextResponse.json({error:err.message})
    }
}
export async function GET(){
    const developers = await prisma.user.findMany()
    return NextResponse.json(developers)
}