import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function GET(req, res){

    const {searchParams} = new URL(req.url);
    let ToEmail= searchParams.get('email')



    //transpoter
    let transpoter= nodemailer.createTransport({
        host:"mail.teamrabbil.com",
        port:25,
        securce: false,
        auth:{
            user:"info@teamrabbil.com",
            pass:'~sR4[bhaC[Qs'
        },
        tls:{
            rejectUnauthorized:false
        }
    })

    //prepare email
    let myEmail={
        form:"Test Email for NEXTJS 13 <info@teamrabbil.com>",
        to:ToEmail,
        subject:"test mail from nextJs 13",
        text:"test mail from nextJs 13"

    }

    

    try{
        let res= await transpoter.sendMail(myEmail);
        return NextResponse.json({msg:res})
    }
    catch (e){
        return NextResponse.json({msg:"failed"})
    }

    
}