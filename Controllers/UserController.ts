import { Request, Response } from "express";

class UserController {
    static async GetUsers(request: Request, response: Response) {
        return response.json([
            {
                Name: "Mohammed",
                Age: 20
            },
            {
                Name: "Ahmed",
                Age: 25
            },
        ]);
    }
}

export default UserController;