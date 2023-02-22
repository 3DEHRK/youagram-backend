import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';
import { ProfileContentService } from './profile-content/profile-content.service';
import { ProfileContentModule } from './profile-content/profile-content.module';

const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 50000,
  username: 'root',
  password: 'password',
  database: 'youagram_db',
  autoLoadEntities: true,
  synchronize: true //sync entity with db
}

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), ProfilesModule, AuthModule, ProfileContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
