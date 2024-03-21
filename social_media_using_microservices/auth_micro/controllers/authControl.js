import bcrypt from "bcrypt";
import prisma from "../config/db.config.js";
import jwt from "jsonwebtoken";

class AuthController {
    static async register(req, res) {

        try {
            const payload = req.body;
            const salt = bcrypt.genSaltSync(10);
            payload.password = bcrypt.hashSync(payload.password, salt)
            const user = await prisma.User.create({
                data: payload
            })

            return res.status(200).json({ message: "registration successfull !!", user });
        } catch (error) {
            return res.status(500).json({ message: "something went wrong !!", error })
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;

            const user = await prisma.User.findUnique({
                where: {
                    email: email
                }
            })
            
            console.log(user)

            if (user) {
                
                if (!bcrypt.compareSync(password, user.password)) {
                    return res.status(401).json({ message: "Invalid Credentials !" })
                }

                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }

                const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
                    expiresIn: "365d",
                })

                return res.json({
                    message: "logged in",
                    access_token: `Bearer ${token}`
                })
            }

            return res.status(401).json({ message: "Invalid Credentials !" })
        } catch (error) {
            return res.status(500).json({ message: "something went wrong !", error: error })
        }

    }
}

export default AuthController;