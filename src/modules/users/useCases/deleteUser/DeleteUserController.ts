import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        // Resolve the DeleteUserUseCase dependency from the container
        const deleteUserUseCase = container.resolve(DeleteUserUseCase);

        try {
            await deleteUserUseCase.delete(id);
            return response.status(200).send();
        } catch (error) {
            // Handle errors appropriately
            return response
                .status(500)
                .json({ error: "Internal Server Error" });
        }
    }
}

export { DeleteUserController };
