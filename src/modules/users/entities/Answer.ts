import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { User } from "./User";
import { Question } from "./Question";

@Entity("answers")
export class Answer {
    @PrimaryColumn()
    id?: string;

    @Column()
    answer: string;

    @CreateDateColumn()
    created_at: Date;
    questions: any;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
    // @ManyToOne um usuário pode ter várias respostas e uma resposta pode ser associada a um usuário.
    @ManyToOne( () => User, (user) => user.answers)
    user: User;

    @ManyToOne( () => Question , (question) => question.answers)
    question: Question;
}
