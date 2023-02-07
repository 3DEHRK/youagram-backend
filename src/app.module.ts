import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ProfilesService } from './profiles/profiles.service';
import { ProfilesController } from './profiles/profiles.controller';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';

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
  imports: [TypeOrmModule.forRoot(ormOptions), ProfilesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
