import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {ProfileEntity} from "../profiles/profile.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class AuthService {

    constructor(@InjectRepository(ProfileEntity)
                private repo: Repository<ProfileEntity>) {
    }

    createProfile(username, password){
        const profile = new ProfileEntity();
        profile.username = username;
        profile.password = password;
        //TODO: encryption
        this.repo.save(profile);
        return 'ok';
    }
}
