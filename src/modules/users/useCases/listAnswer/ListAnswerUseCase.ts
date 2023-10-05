import { inject, injectable } from "tsyringe";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Answer } from "../../entities/Answer";

import { IAnswersRepository } from "../../repositories/IAnswersRepository";

@injectable()
class ListAnswerUseCase {
    constructor(
        @inject("AnswersRepository")
        private answersRepository: IAnswersRepository
    ) {}

    async execute(): Promise<Answer[]> {
        const answers = await this.answersRepository.list();
        return answers;
    }
}

export { ListAnswerUseCase };
