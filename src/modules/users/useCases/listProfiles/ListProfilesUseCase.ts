// eslint-disable-next-line import/no-extraneous-dependencies
import { inject, injectable } from "tsyringe";

import { Profile } from "../../entities/Profile";
import { IProfilesRepository } from "../../repositories/IProfilesRepository";

@injectable()
class ListProfilesUseCase {
    constructor(
        @inject("ProfilesRepository")
        private profileRepository: IProfilesRepository
    ) {}

    async execute(): Promise<Profile[]> {
        const profiles = await this.profileRepository.list();
        return profiles;
    }
}

export { ListProfilesUseCase };
