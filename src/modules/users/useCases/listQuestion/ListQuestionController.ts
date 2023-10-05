import { Request, Response } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from "tsyringe";

import { ListQuestionUseCase } from "./ListQuestionUseCase";

class ListQuestionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listQuestionUseCase = container.resolve(ListQuestionUseCase);

        const all = await listQuestionUseCase.execute();
        return response.status(200).json(all);
    }
}

export { ListQuestionController };
