import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export async function POST(){
    try{
    let name  = "mukta"
    let email ="mukta1244443@gmail.com"
    const newUser = await prisma.user.create({
        data: {
            name,
            email
        }
    })
    console.log({newUser})
    return NextResponse.json(newUser)
    }
    catch(err){
        return NextResponse.json({error:err.message})
    }
}