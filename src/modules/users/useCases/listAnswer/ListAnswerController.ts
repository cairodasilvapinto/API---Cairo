import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAnswerUseCase } from "./ListAnswerUseCase";

class ListAnswerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAnswerUseCase = container.resolve(ListAnswerUseCase);

        const all = await listAnswerUseCase.execute();
        return response.status(200).json(all);
    }
}

export { ListAnswerController };
