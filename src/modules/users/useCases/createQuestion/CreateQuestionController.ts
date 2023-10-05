import { Request, Response } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from "tsyringe";

import { CreateQuestionUseCase } from "./CreateQuestionUseCase";

class CreateQuestionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { question } = request.body;

        const createQuestionUseCase = container.resolve(CreateQuestionUseCase);

        createQuestionUseCase.execute({ question });
        return response.status(201).send();
    }
}

export { CreateQuestionController };
