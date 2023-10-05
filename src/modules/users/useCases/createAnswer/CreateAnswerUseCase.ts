import { inject, injectable } from "tsyringe";

import { IAnswersRepository } from "../../repositories/IAnswersRepository";

interface IRequest {
    answer: string;
}

@injectable()
class CreateAnswerUseCase {
    constructor(
        @inject("AnswersRepository")
        private answersRepository: IAnswersRepository
    ) {}

    async execute({ answer }: IRequest): Promise<void> {
        const answerAlreadyExists = await this.answersRepository.findByAnswer(
            answer
        );

        if (answerAlreadyExists) {
            throw new Error("Answer Already Exists!");
        }
        this.answersRepository.create({ answer });
    }
}

export { CreateAnswerUseCase };
