import * as dotenv from "dotenv";

dotenv.config();


export const Auth0Config = {
    DOMAIN:`${process.env.DOMAIN}`,
    CLIENT_ID:`${process.env.CLIENT_ID}`,
    CLIENT_SECRET: `${process.env.CLIENT_SECRET}`,
    REDIRECT_URI:`${window.location.origin}/callback`,
    AUDIENCE: `${process.env.AUDIENCE}`,
    callbackURL: "http://localhost:3000/callback",
    SCOPE:"read:current_user update:current_user_metadata",
    RESPONSE_TYPE:"code",
    GRANT_TYPE:"client_credentials"
}

export  const AppConstant = {
    API_URI: "http://localhost:8000"
}