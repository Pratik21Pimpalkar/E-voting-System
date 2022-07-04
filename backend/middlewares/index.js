import expressJwt from "express-jwt"

export const Authenticate = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256']
})