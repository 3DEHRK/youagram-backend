import { Module } from '@nestjs/common';
import {ProfilesController} from "./profiles.controller";
import {ProfilesService} from "./profiles.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProfileEntity} from "./profile.entity";
import {JwtModule} from "@nestjs/jwt";
import {LinkEntity} from "../profile-content/link.entity";

@Module({
    controllers: [ProfilesController],
    providers: [ProfilesService],
    imports: [TypeOrmModule.forFeature([ProfileEntity, LinkEntity]), JwtModule]
})
export class ProfilesModule {}
