export const Auth0Config = {
    DOMAIN:`${process.env.REACT_APP_DOMAIN}`,
    CLIENT_ID:`${process.env.REACT_APP_CLIENT_ID}`,
    CLIENT_SECRET: `${process.env.REACT_APP_CLIENT_SECRET}`,
    REDIRECT_URI:`${window.location.origin}/callback`,
    AUDIENCE: `${process.env.REACT_APP_AUDIENCE}`,
    callbackURL: `${process.env.REACT_APP_CALLBACK_URL}`,
    SCOPE:`${process.env.REACT_APP_SCOPE}`,
    RESPONSE_TYPE:`${process.env.REACT_APP_RESPONSE_TYPE}`,
    GRANT_TYPE:`${process.env.REACT_APP_GRANT_TYPE}`
}

export  const AppConstant = {
    API_URI: "http://localhost:8000"
}