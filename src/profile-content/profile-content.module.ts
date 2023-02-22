import { Module } from '@nestjs/common';
import { ProfileContentController } from './profile-content.controller';
import {ProfileContentService} from "./profile-content.service";
import {JwtModule} from "@nestjs/jwt";
import {ProfileEntity} from "../profiles/profile.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {LinkEntity} from "./link.entity";

@Module({
  controllers: [ProfileContentController],
  providers: [ProfileContentService],
  imports: [TypeOrmModule.forFeature([ProfileEntity, LinkEntity]), JwtModule]
})
export class ProfileContentModule {}
