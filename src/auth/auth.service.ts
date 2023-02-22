import {ConflictException, HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {ProfileEntity} from "../profiles/profile.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(ProfileEntity)
                private repo: Repository<ProfileEntity>,
                private jwt: JwtService) {
    }

    async createProfile(username, password){

        //TODO: validation using DTO

        if(!username)
            throw new HttpException("Username can't be empty", 406);

        if(username.length > 32)
            throw new HttpException("Username is too long", 406);

        if(!password)
            throw new HttpException("Password can't be empty", 406);

        if(await this.repo.findOne({where: {username}}))
            throw new ConflictException('Username already taken');

        const hash = await bcrypt.hash(password, 10);

        const profile = new ProfileEntity();
        profile.username = username;
        profile.password = hash;

        await this.repo.save(profile);
        return await this.jwtLogin(username);
    }

    async login(username: string, password){
        const user = await this.repo.findOne({where:{username}});

        if(!user || !password)
            throw new UnauthorizedException('Invalid password or username');

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            return this.jwtLogin(username);
        }else{
            throw new UnauthorizedException('Invalid password or username');
        }
    }

    async jwtLogin(username){
        const jwtPayload = {username};
        const jwtToken = await this.jwt.signAsync(jwtPayload);
        return {token: jwtToken};
    }
}
