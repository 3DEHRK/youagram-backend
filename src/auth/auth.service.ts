import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {ProfileEntity} from "../profiles/profile.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(@InjectRepository(ProfileEntity)
                private repo: Repository<ProfileEntity>,
                private jwt: JwtService) {
    }

    createProfile(username, password){
        const profile = new ProfileEntity();
        profile.username = username;
        profile.password = password;
        //TODO: encryption
        this.repo.save(profile);
        return 'ok';
    }

    async login(username, password){
        const user = await this.repo.findOne({where:{username}});

        if(!user)
            throw new UnauthorizedException('Invalid credentials');

        if(user.password === password){
            const jwtPayload = {username};
            const jwtToken = await this.jwt.signAsync(jwtPayload);
            return {token: jwtToken}
        }else{
            throw new UnauthorizedException('Invalid credentials');
        }
    }
}
