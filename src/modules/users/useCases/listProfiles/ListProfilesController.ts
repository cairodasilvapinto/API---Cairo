import { Request, Response } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from "tsyringe";

import { ListProfilesUseCase } from "./ListProfilesUseCase";

class ListProfilesController {
    async handler(request: Request, response: Response): Promise<Response> {
        const listProfilesUseCase = container.resolve(ListProfilesUseCase);

        const all = await listProfilesUseCase.execute();
        return response.status(200).json(all);
    }
}

export { ListProfilesController };
