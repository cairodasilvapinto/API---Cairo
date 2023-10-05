import { inject, injectable } from "tsyringe";

import { IQuestionsRepository } from "../../repositories/IQuestionsRepository";

interface IRequest {
    id: string;
}

@injectable()
class DeleteQuestionUseCase {
    static execute() {
        throw new Error("Method not implemented.");
    }

    constructor(
        @inject("QuestionsRepository")
        private questionsRepository: IQuestionsRepository
    ) {}

    async delete(id: string): Promise<void> {
        await this.questionsRepository.delete(id);
    }
}

export { DeleteQuestionUseCase };
