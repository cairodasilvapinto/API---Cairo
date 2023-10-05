import { inject, injectable } from "tsyringe";

import { IProfilesRepository } from "../../repositories/IProfilesRepository";

interface IRequest {
    id: string;
}

@injectable()
class DeleteProfileUseCase {
    static execute() {
        throw new Error("Method not implemented.");
    }

    constructor(
        @inject("ProfilesRepository")
        private profilesRepository: IProfilesRepository
    ) {}

    async delete(id: string): Promise<void> {
        await this.profilesRepository.delete(id);
    }
}

export { DeleteProfileUseCase };
