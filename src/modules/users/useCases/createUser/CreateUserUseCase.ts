// eslint-disable-next-line import/no-extraneous-dependencies
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
    cpf: string;
    profile: string;
    password: string;
    alocacao: string;
    superior_imediato: string;
    assuidade: string;
    infoadd: string;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        name,
        email,
        cpf,
        profile,
        password,
        alocacao,
        superior_imediato,
        assuidade,
        infoadd,
    }: IRequest): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("User Already Exists !");
        }
        this.usersRepository.create({
            name,
            email,
            cpf,
            profile,
            password,
            alocacao,
            superior_imediato,
            assuidade,
            infoadd,
        });
    }
}

export { CreateUserUseCase };
