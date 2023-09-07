import { NextResponse } from 'next/server';

export default async (req, res) => {
  
  const originalAuthorizationHeader = req.headers.authorization;

  if (originalAuthorizationHeader) {
    
    const modifiedAuthorizationHeader = `Bearer ${originalAuthorizationHeader}`;

  
    const newHeaders = { ...req.headers, authorization: modifiedAuthorizationHeader };

  
    return NextResponse.next({ ...req, headers: newHeaders });
  }

 
  return NextResponse.next(req);
};