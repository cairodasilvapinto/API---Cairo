import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { User } from "./User";

@Entity("profiles")
export class Profile {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
    // @ManyToMany um perfil pode ser associado a vários usuários e um usuário pode estar associado a vários perfis.
    @ManyToMany(() => User)
    @JoinTable()
    users: User[];
}
