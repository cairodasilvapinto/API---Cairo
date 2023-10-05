import { Question } from "../entities/Question";

interface ICreateQuestionDTO {
    question: string;
}

interface IQuestionsRepository {
    findByQuestion(question: string): unknown;
    list(): Promise<Question[]>;
    create({ question }: ICreateQuestionDTO): Promise<void>;
    delete(id: string): Promise<void>;
}

export { IQuestionsRepository, ICreateQuestionDTO };
