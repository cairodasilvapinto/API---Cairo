import {Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteAnswerUseCase } from './DeleteAnswerUseCase';

class DeleteAnswerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteAnswerUseCase = container.resolve(DeleteAnswerUseCase);

        try {
            await deleteAnswerUseCase.delete(id);
            return response.status(200).send();
        } catch (error) {
            return response
                .status(500)
                .json({ error: "Internal Server Error" });
        }
    }
}

export { DeleteAnswerController };
