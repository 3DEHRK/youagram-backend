import {Body, Controller, Get, Header, Param, Put, Req} from '@nestjs/common';
import {ProfilesService} from "./profiles.service";
import {JwtService} from "@nestjs/jwt";

@Controller('profiles')
export class ProfilesController {

    constructor(private profilesService: ProfilesService,
                private jwtService: JwtService) {
    }

    @Get()
    getProfiles(){
        return this.profilesService.getProfiles();
    }

    @Get('/:username')
    getProfileByName(@Param('username') username){
        return this.profilesService.getProfileByName(username);
    }

    @Put()
    updateProfile(@Body() body, @Req() request){
        //const jwt = request.headers.authorization.replace('Bearer ', '');
        const json = this.jwtService.decode(request.headers.bearer, {json: true}) as {username: string};
        return this.profilesService.updateProfile(body, json.username);
    }
}
