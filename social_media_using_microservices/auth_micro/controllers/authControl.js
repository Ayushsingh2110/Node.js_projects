import bcrypt from "bcrypt";
import prisma from "../config/db.config.js";

class AuthController{
    static async register(req, res) {
        
        try{
            const payload = req.body;
        const salt = bcrypt.genSaltSync(10);
            payload.password = bcrypt.hashSync(payload.password, salt)
            const user = await prisma.User.create({
                data: payload
            })

            return res.status(200).json({ message: "registration successfull !!", user});
        }catch(error){
            return res.status(500).json({message: "something went wrong !!", error})
        }

        
    }
}

export default AuthController;