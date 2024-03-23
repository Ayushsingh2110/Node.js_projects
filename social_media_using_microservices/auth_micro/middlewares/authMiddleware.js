import jwt from "jsonwebtoken";

const AuthMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(req.headers);
    if(authHeader === null || authHeader === undefined){
        return res.status(401).json({ status: 401, message: "Unauthorized user"})
    }

    const token = authHeader.split(" ")[1]
    
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
        if(err){
            return res.status(401).json({ status: 401, message: "Unauthorized user"})
        }

        req.user = payload;
        next();
    })
}

export default AuthMiddleware;