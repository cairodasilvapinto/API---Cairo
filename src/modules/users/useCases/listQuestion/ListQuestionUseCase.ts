// eslint-disable-next-line import/no-extraneous-dependencies
import { inject, injectable } from "tsyringe";

import { Question } from "../../entities/Question";
import { IQuestionsRepository } from "../../repositories/IQuestionsRepository";

@injectable()
class ListQuestionUseCase {
    constructor(
        @inject("QuestionsRepository")
        private questionsRepository: IQuestionsRepository
    ) {}

    async execute(): Promise<Question[]> {
        const questions = await this.questionsRepository.list();
        return questions;
    }
}

export { ListQuestionUseCase };
