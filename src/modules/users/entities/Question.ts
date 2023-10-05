import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { User } from "./User";
import { Answer } from "./Answer";

@Entity("questions")
export class Question {
    @PrimaryColumn()
    id?: string;

    @Column()
    question: string;

    @CreateDateColumn()
    created_at: Date;
    answers: any;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
    @ManyToOne( () => User, (user) => user.questions)
    user: User;

    @OneToMany( () => Answer , (answer) => answer.question)
    answer: Answer[];
}
