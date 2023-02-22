import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {LinkEntity} from "../profile-content/link.entity";

@Entity('profiles')
export class ProfileEntity{

    @PrimaryGeneratedColumn()
    profileId: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({nullable: true, length: 1000})
    biography: string;

    @Column({nullable: true})
    profilePictureLink: string;

    @OneToMany(() => LinkEntity, (link) => link.profile)
    links: LinkEntity[];
}
