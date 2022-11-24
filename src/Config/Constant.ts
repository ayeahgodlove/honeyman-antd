export const Auth0Config = {
    DOMAIN:"dev-78podwfm.us.auth0.com",
    CLIENT_ID:"l31TbwoPpGeH6yQANLbrWjnZnsynt5Ht",
    CLIENT_SECRET: "TBP5GwgCVXUIY8UdDjWI1m6PAYO8_8Z9aWumsXiFzVn0noNotLtoDOtqCpWJa7o4",
    REDIRECT_URI:`${window.location.origin}/callback`,
    AUDIENCE: "https://www.honeyman-api.com",
    callbackURL: "http://localhost:3000/callback",
    SCOPE:"read:current_user update:current_user_metadata",
    RESPONSE_TYPE:"code",
    GRANT_TYPE:"client_credentials"
}

export  const AppConstant = {
    API_URI: "http://localhost:7000"
}