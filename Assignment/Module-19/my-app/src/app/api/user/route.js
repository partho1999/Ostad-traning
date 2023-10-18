import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";



export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        const result=await prisma.users.findMany({})
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}

export async function POST(req,res) {
    try{
       
        let reqBody=await req.json();

        const prisma=new PrismaClient();
        const result=await prisma.users.create({data:reqBody})

        return  NextResponse.json({status:"success",data:reqBody})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}


export async function PUT(req,res) {
    try{
        

        let reqBody=await req.json();

        let {searchParams} = new URL(req.url);
        let cus_id = searchParams.get('cus_id');

        const prisma=new PrismaClient();
        const result=await prisma.users.update(
            {
                where: {id: parseInt(cus_id)},
                data:reqBody
            }
        )

        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}

export async function DELETE(req,res) {
    try {
        

        let {searchParams} = new URL(req.url);
        let cus_id = searchParams.get('cus_id');

        const prisma = new PrismaClient();
        const result = await prisma.users.delete(
            {
                where: {
                    id: parseInt(cus_id)
                }
            }
        )
        return NextResponse.json({status: "success", data: result})

    } catch (e) {
        return NextResponse.json({status: "fail", data: e})
    }

}



export async function PATCH(req,res) {
    try{
        let headerList=headers();
        let user_id=headerList.get('id')

        let {searchParams}= new URL(req.url);
        let cus_id=searchParams.get('cus_id');

        const prisma=new PrismaClient();
        const result=await prisma.users.findUnique(
            {
                where:{
                    id:parseInt(cus_id),
                    user_id:parseInt(user_id)
                }
            }

        )
        return  NextResponse.json({status:"success",data:result})

    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}