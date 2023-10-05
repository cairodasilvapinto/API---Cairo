import { Repository } from "typeorm";

import { AppDataSource } from "../../../../../data-source";
import { Answer } from "../../entities/Answer";
import { ICreateAnswerDTO, IAnswersRepository } from "../IAnswersRepository";

class AnswersRepository implements IAnswersRepository {
    private repository: Repository<Answer>;

    constructor() {
        this.repository = AppDataSource.getRepository(Answer);
    }

    async list(): Promise<Answer[]> {
        const answers = await this.repository.find();
        return answers;
    }

    async create({ answer }: ICreateAnswerDTO): Promise<void> {
        const answers = this.repository.create({
            answer,
        });
        
        await this.repository.save(answers);
    }

    async findByAnswer(answer: string): Promise<Answer> {
        const answers = await this.repository.findOneBy({ answer });
        return answers;
    }

    delete(id: string): Promise<void> {
        return this.repository.delete(id).then();
    }

}
export { AnswersRepository };
