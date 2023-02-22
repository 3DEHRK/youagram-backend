import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
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

    async getProfiles() {
        return this.repo.createQueryBuilder('profile').getMany();
    }

    async getProfileByName(username) {
        return this.repo.findOne({where: {username}});
    }

    async updateProfile(body, username){

        if(!username)
            throw new UnauthorizedException('Invalid token');

        if(body.profile.profilePictureLink.length > 255)
            throw new HttpException("Link max 255 characters",406);

        if(body.profile.profilePictureLink){
            await this.repo.createQueryBuilder()
                .update(ProfileEntity)
                .where("username = :username", {username})
                .set({profilePictureLink: body.profile.profilePictureLink})
                .execute();
        }

        if(body.profile.biography.length > 1000)
            throw new HttpException("Biography max 1000 characters",406);

        if(body.profile.biography){
            await this.repo.createQueryBuilder()
                .update(ProfileEntity)
                .where("username = :username", {username})
                .set({biography: body.profile.biography})
                .execute();
        }
        return true;
    }
}
