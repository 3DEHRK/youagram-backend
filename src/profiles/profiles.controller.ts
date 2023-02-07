import {Controller, Get, Param} from '@nestjs/common';
import {ProfilesService} from "./profiles.service";

@Controller('profiles')
export class ProfilesController {

    constructor(private profilesService: ProfilesService) {
    }

    @Get()
    getProfiles(){
        return this.profilesService.getProfiles();
    }

    @Get('/:username')
    getProfileByName(@Param('username') username){
        return this.profilesService.getProfileByName(username);
    }
}
