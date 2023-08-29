import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 


// Given an incoming request...

export async function GET(req, res){
    
    // And redirect to the new URL
    return NextResponse.redirect(new URL('/', req.nextUrl))
}