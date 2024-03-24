import prisma from "../config/db.config.js"


class UserControl {
    static async getUser(req, res){

        const user = await prisma.User.findUnique({
            where: {
                id: req.params.userID
            }
        })

        //remove password before sending
        delete user?.password

        if(user){
            return res.status(200).json({ user: user})
        }

        return res.status(404).json({message: "User not found !!"})
    }
}

export default UserControl;