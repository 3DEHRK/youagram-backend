import { Injectable } from '@nestjs/common';
import {Column, PrimaryGeneratedColumn, Repository} from "typeorm";
import {ProfileEntity} from "./profile.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ProfilesService {

    constructor(
        @InjectRepository(ProfileEntity)
        private repo: Repository<ProfileEntity>
    ) {
    }

    getProfiles() {
        return this.repo.createQueryBuilder('profile').getMany();
    }

    getProfileByName(username) {
        return this.repo.findOne({where: {username}});
    }

    async updateProfile(body, username) {

        if(!username)
            return 'failed';

        if(body.biography){
            await this.repo.createQueryBuilder()
                .update(ProfileEntity)
                .where("username = :username", {username})
                .set({biography: body.biography})
                .execute();
        }


        if(body.profilePictureLink){
            await this.repo.createQueryBuilder()
                .update(ProfileEntity)
                .where("username = :username", {username})
                .set({profilePictureLink: body.profilePictureLink})
                .execute();
        }
    }
}
