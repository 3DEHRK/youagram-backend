import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ProfileEntity} from "../profiles/profile.entity";

@Entity('links')
export class LinkEntity{

    @PrimaryGeneratedColumn()
    linkId: number;

    @Column()
    title: string;

    @Column()
    url: string;

    @ManyToOne(() => ProfileEntity, (profile) => profile.links)
    profile: ProfileEntity;
}
