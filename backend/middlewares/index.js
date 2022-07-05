import ExpressJwt from "express-jwt"

export const Authenticate = ExpressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
})