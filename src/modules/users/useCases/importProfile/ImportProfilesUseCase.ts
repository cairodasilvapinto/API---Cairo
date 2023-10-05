// eslint-disable-next-line import/no-extraneous-dependencies
import { parse } from "csv-parse";
import fs from "fs";
// eslint-disable-next-line import/no-extraneous-dependencies
import { inject, injectable } from "tsyringe";

import { IProfilesRepository } from "../../repositories/IProfilesRepository";

interface IImportProfile {
    name: string;
    description: string;
}
@injectable()
class ImportProfilesUseCase {
    constructor(
        @inject("ProfilesRepository")
        private profilesRepository: IProfilesRepository
    ) {}

    loadProfiles(file: Express.Multer.File): Promise<IImportProfile[]> {
        return new Promise((resolve, reject) => {
            const profiles: IImportProfile[] = [];
            const stream = fs.createReadStream(file.path);

            const parseFile = parse();

            stream.pipe(parseFile);
            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    profiles.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(profiles);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const profiles = await this.loadProfiles(file);

        profiles.map(async (profile) => {
            const { name, description } = profile;

            const existProfile = await this.profilesRepository.findByName(name);

            if (!existProfile) {
                this.profilesRepository.create({
                    name,
                    description,
                });
            }
        });
    }
}

export { ImportProfilesUseCase };
