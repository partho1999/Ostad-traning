
// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";


import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

export async function GET(req ,res){
      
        const tm= req.cookies.get('theme')
    return  NextResponse.json({theme:tm.value},{
            status:200,
            headers:{
                'Set-cookie':'theme=dark;path=/'
            }
      })
}