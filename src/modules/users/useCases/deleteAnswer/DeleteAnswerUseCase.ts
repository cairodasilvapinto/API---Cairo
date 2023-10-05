import { inject, injectable } from "tsyringe";

import { IAnswersRepository } from "../../repositories/IAnswersRepository";

interface IRequest {
    id: string;
}

@injectable()
class DeleteAnswerUseCase {
    static execute() {
        throw new Error("Method not implemented.");
    }
    
    constructor(
        @inject("AnswersRepository")
        private answersRepository: IAnswersRepository
    ) {}

    async delete(id: string): Promise<void> {
        await this.answersRepository.delete(id);
    }
}

export { DeleteAnswerUseCase };
