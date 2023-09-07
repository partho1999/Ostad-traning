import { createToken } from "./JWTHelper";

export async function TokenCookie(email){

    let token = await createToken(email)
    return {'Set-Cookie': `token=${token}; Max-Age=7200; Secure; HttpOnly; path=/; SameSite=Strict`}

}