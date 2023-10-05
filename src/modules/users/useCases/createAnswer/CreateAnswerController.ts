import { Request, Response } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from "tsyringe";

import { CreateAnswerUseCase } from "./CreateAnswerUseCase";

class CreateAnswerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { answer } = request.body;

        const createAnswerUseCase = container.resolve(CreateAnswerUseCase);

        createAnswerUseCase.execute({ answer });
        return response.status(201).send();
    }
}

export { CreateAnswerController };
