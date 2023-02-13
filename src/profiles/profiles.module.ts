import { Module } from '@nestjs/common';
import {ProfilesController} from "./profiles.controller";
import {ProfilesService} from "./profiles.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProfileEntity} from "./profile.entity";
import {JwtModule} from "@nestjs/jwt";

@Module({
    controllers: [ProfilesController],
    providers: [ProfilesService],
    imports: [TypeOrmModule.forFeature([ProfileEntity]), JwtModule]
})
export class ProfilesModule {}
