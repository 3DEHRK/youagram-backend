import {HttpException, Injectable} from '@nestjs/common';
import {createQueryBuilder, Repository} from "typeorm";
import {ProfileEntity} from "../profiles/profile.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {LinkEntity} from "./link.entity";

@Injectable()
export class ProfileContentService {

    constructor(
        @InjectRepository(ProfileEntity)
        private profileRepo: Repository<ProfileEntity>,
        @InjectRepository(LinkEntity)
        private linkRepo: Repository<LinkEntity>) {
    }

    async getLinks(username){

        const query = await this.profileRepo.createQueryBuilder()
            .where({username})
            .getOne();

        const query1 = await this.linkRepo.createQueryBuilder()
            .where({profile: query.profileId})
            .getMany();

        return query1;
    }

    async addLink(url, title, username){

        const query = await this.profileRepo.createQueryBuilder()
            .where({username})
            .getOne();

        const link = new LinkEntity();
        link.url = url;
        link.title = title;
        link.profile = query;
        await this.linkRepo.save(link);
    }
}
