import { inject, injectable } from "tsyringe";

import { IQuestionsRepository } from "../../repositories/IQuestionsRepository";

interface IRequest {
    question: string;
}

@injectable()
class CreateQuestionUseCase {
    constructor(
        @inject("QuestionsRepository")
        private questionsRepository: IQuestionsRepository
    ) {}

    async execute({ question }: IRequest): Promise<void> {
        const questionAlreadyExists = await this.questionsRepository.findByQuestion(
            question
        );

        if (questionAlreadyExists) {
            throw new Error("Question Already Exists!");
        }
        this.questionsRepository.create({ question });
    }
}

export { CreateQuestionUseCase };
