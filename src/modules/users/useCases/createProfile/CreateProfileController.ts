import { Request, Response } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from "tsyringe";

import { CreateProfileUseCase } from "./CreateProfileUseCase";

class CreateProfileController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const createProfileUseCase = container.resolve(CreateProfileUseCase);

        createProfileUseCase.execute({ name, description });
        return response.status(201).send();
    }
}

export { CreateProfileController };
