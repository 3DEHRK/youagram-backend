import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProfileEntity} from "../profiles/profile.entity";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [TypeOrmModule.forFeature([ProfileEntity])]
})
export class AuthModule {}