import { Repository } from "typeorm";

import { AppDataSource } from "../../../../../data-source";
import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    findByEmail(email: string): Promise<User | undefined> {
        return this.repository.findOne({ where: { email } });
    }

    delete(id: string): Promise<void> {
        return this.repository.delete(id).then();
    }

    findById(id: string): unknown {
        throw new Error("Method not implemented.");
    }

    async create({
        name,
        email,
        cpf,
        profile,
        password,
        alocacao,
        assuidade,
        superior_imediato,
        infoadd,
    }: ICreateUserDTO): Promise<void> {
        // const user = new User();
        const user = this.repository.create({
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

        await this.repository.save(user);
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }
}

export { UsersRepository };
