import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    id: string;
}

@injectable()
class DeleteUserUseCase {
    static execute() {
        throw new Error("Method not implemented.");
    }

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async delete(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}

export { DeleteUserUseCase };
