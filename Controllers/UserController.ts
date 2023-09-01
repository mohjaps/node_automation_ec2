import { Request, Response } from "express";

class UserController {
    static async GetUsers(request: Request, response: Response) {
        return response.json([
            {
                Name: "Mohammed",
                Age: 20,
                Date: new Date().toLocaleString()
            },
            {
                Name: "Ahmed",
                Age: 25
            },
        ]);
    }
}

export default UserController;