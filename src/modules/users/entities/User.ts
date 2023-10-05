import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Answer } from "./Answer";
import { Question } from "./Question";

@Entity("users")
export class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    cpf: string;

    @Column()
    profile: string;

    @Column()
    password: string;

    @Column()
    alocacao: string;

    @Column()
    superior_imediato: string;

    @Column()
    assuidade: string;

    @Column()
    infoadd: string;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
    
    // um usuário pode ter várias respostas, mas uma resposta pode estar associada a apenas um usuário.
    @OneToMany(() => Answer, (answer) => answer.user)
    answers: Answer[];

    @OneToMany(() => Question, (question) => question.user)
    questions: Question[];
}
