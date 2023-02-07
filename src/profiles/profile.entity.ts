import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('profiles')
export class ProfileEntity{

    @PrimaryGeneratedColumn()
    profileId: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({nullable: true})
    biography: string;

    @Column({nullable: true})
    profilePictureLink: string;
}
