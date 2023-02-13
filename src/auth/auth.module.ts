import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProfileEntity} from "../profiles/profile.entity";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";


@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [TypeOrmModule.forFeature([ProfileEntity]), JwtModule.register({
        secret: 'usFgcqkljNdelElshshsMhsizSuwgZciwecug23458K8756Z7',
        signOptions:{
            algorithm: 'HS512',
            expiresIn: '1d'
        }
    }),
    PassportModule.register({
        defaultStrategy: 'jwt'
    })]
})
export class AuthModule {}
