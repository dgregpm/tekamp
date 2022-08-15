import { getToken } from 'next-auth/jwt';
import { NextResponse , NextRequest } from 'next/server';


export async function middleware(req) {
    // console.log("hello");
    // const token = await getToken({ req, secret: process.env.JWT_SECRET});
    
    // const url = req.nextUrl.clone();
    // url.pathname = "/login";
    


    // //console.log(token);
    
    // if(url.pathname.includes('/api/auth') || token) {
    //     console.log(token);
    //     return NextResponse.next();
       
    // }

    // // Redirect them to login if they dont have token AND are requesting a protected route
    // if(!token && url.pathname !== "/login") {
    //     console.log(`middle`);
    // return NextResponse.redirect(url);

    // }
}