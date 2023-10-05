import { User } from "../entities/User";

interface ICreateUserDTO {
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

interface IUsersRepository {
    findByEmail: unknown;
    findById(id: string): unknown;
    delete(id: string): Promise<void>;
    list(): Promise<User[]>;
    create({
        name,
        email,
        cpf,
        profile,
        password,
        alocacao,
        superior_imediato,
        assuidade,
        infoadd,
    }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO };
