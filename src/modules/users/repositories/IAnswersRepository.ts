import { Answer } from "../entities/Answer";

interface ICreateAnswerDTO {
    answer: string;
}

interface IAnswersRepository {
    findByAnswer(answer: string): Promise<Answer>;
    list(): Promise<Answer[]>;
    create({ answer }: ICreateAnswerDTO): Promise<void>;
    delete(id: string): unknown;
}

export { IAnswersRepository, ICreateAnswerDTO };
