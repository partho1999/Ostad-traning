import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";



export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        const result=await prisma.product.findMany({})
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
        const result=await prisma.product.create({data:reqBody})

        return  NextResponse.json({status:"success",data:result})
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
        const result=await prisma.product.update(
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
        const result = await prisma.product.delete(
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

        let {searchParams}= new URL(req.url);
        let cus_id=searchParams.get('cus_id');

        const prisma=new PrismaClient();
        const result=await prisma.product.findUnique(
            {
                where:{
                    id:parseInt(cus_id)
                }
            }

        )
        return  NextResponse.json({status:"success",data:result})

    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}