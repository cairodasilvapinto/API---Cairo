// eslint-disable-next-line import/no-extraneous-dependencies
import { inject, injectable } from "tsyringe";

import { IProfilesRepository } from "../../repositories/IProfilesRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateProfileUseCase {
    constructor(
        @inject("ProfilesRepository")
        private profilesRepository: IProfilesRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const profileAlreadyExists = await this.profilesRepository.findByName(
            name
        );

        if (profileAlreadyExists) {
            throw new Error("Profile Already Exists!");
        }
        this.profilesRepository.create({ name, description });
    }
}

export { CreateProfileUseCase };
