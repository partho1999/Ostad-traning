import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";



export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        const result=await prisma.product.groupBy({
            by:['userId'],
            _max:{price:true},
            _sum:{price:true} 

        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
        
    }
}
