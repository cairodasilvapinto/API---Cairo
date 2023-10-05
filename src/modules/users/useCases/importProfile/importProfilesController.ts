import { Request, Response } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from "tsyringe";

import { ImportProfilesUseCase } from "./ImportProfilesUseCase";

// eslint-disable-next-line import/no-extraneous-dependencies

class ImportProfilesController {
    async handler(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        const importProfilesUseCase = container.resolve(ImportProfilesUseCase);
        importProfilesUseCase.execute(file);
        return response.status(201).send();
    }
}

export { ImportProfilesController };
