import { NextResponse } from 'next/server'
 


// Given an incoming request...

export async function GET(req, res){
    const loginUrl = new URL('/cookie', request.url)
    // And redirect to the new URL
    return NextResponse.redirect(loginUrl)
}