import { Module } from '@nestjs/common';
import {ProfilesController} from "./profiles.controller";
import {ProfilesService} from "./profiles.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProfileEntity} from "./profile.entity";

@Module({
    controllers: [ProfilesController],
    providers: [ProfilesService],
    imports: [TypeOrmModule.forFeature([ProfileEntity])]
})
export class ProfilesModule {}
