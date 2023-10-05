import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteQuestionUseCase } from "./DeleteQuestionUseCase";

class DeleteQuestionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        // Resolve the DeleteQuestionUseCase dependency from the container
        const deleteQuestionUseCase = container.resolve(DeleteQuestionUseCase);

        try {
            await deleteQuestionUseCase.delete(id);
            return response.status(200).send();
        } catch (error) {
            // Handle errors appropriately
            return response
                .status(500)
                .json({ error: "Internal Server Error" });
        }
    }
}

export { DeleteQuestionController };
