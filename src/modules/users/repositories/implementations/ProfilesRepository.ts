import { Repository } from "typeorm";

import { AppDataSource } from "../../../../../data-source";
import { Profile } from "../../entities/Profile";
import { IProfilesRepository, ICreateProfileDTO } from "../IProfilesRepository";

class ProfilesRepository implements IProfilesRepository {
    private repository: Repository<Profile>;

    constructor() {
        this.repository = AppDataSource.getRepository(Profile);
    }

    async list(): Promise<Profile[]> {
        const profiles = await this.repository.find();
        return profiles;
    }

    async create({ name, description }: ICreateProfileDTO): Promise<void> {
        const profile = this.repository.create({
            description,
            name,
        });

        await this.repository.save(profile);
    }

    async findByName(name: string): Promise<Profile> {
        const profile = await this.repository.findOneBy({ name });
        return profile;
    }

    delete(id: string): Promise<void> {
        return this.repository.delete(id).then();
    }
}

export { ProfilesRepository };
