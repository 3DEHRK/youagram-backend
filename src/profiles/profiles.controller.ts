import {Body, Controller, Get, Header, HttpException, Param, Put, Req, Res} from '@nestjs/common';
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
    async updateProfile(@Body() body, @Req() request, @Res() res){
        const json = this.jwtService.decode(request.headers.bearer, {json: true}) as {username: string};
        if(await this.profilesService.updateProfile(body, json.username)){
            res.status(200).send(JSON.stringify('Updated profile'));
        }
    }
}
