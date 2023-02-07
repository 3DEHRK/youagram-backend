import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {ProfileEntity} from "./profile.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ProfilesService {

    constructor(
        @InjectRepository(ProfileEntity)
        private repo: Repository<ProfileEntity>
    ) {
    }

    getProfiles(){
        return this.repo.createQueryBuilder('profile').getMany();
    }

    getProfileByName(username){
        return this.repo.findOne({where:{username}});
    }
}
