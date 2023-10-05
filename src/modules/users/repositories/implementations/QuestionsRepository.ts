import { Repository } from "typeorm";

import { AppDataSource } from "../../../../../data-source";
import { Question } from "../../entities/Question";
import {
    ICreateQuestionDTO,
    IQuestionsRepository,
} from "../IQuestionsRepository";

class QuestionsRepository implements IQuestionsRepository {
    private repository: Repository<Question>;

    constructor() {
        this.repository = AppDataSource.getRepository(Question);
    }
findByQuestion(question: string): Promise<Question> {
    const questions = this.repository.findOneBy({ question });
    return questions;
}
    delete(id: string): Promise<void> {
        return this.repository.delete(id).then();
    }

    async create({ question }: ICreateQuestionDTO): Promise<void> {
        const questions = this.repository.create({
            question,
        });

        await this.repository.save(questions);
    }

    async list(): Promise<Question[]> {
        const questions = await this.repository.find();
        return questions;
    }
}

export { QuestionsRepository };
