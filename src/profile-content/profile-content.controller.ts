import {Body, Controller, Delete, Get, HttpException, Param, Post, Put, Req, Res} from '@nestjs/common';
import {ProfileContentService} from "./profile-content.service";
import {JwtService} from "@nestjs/jwt";

@Controller('content')
export class ProfileContentController {

    constructor(private contentService: ProfileContentService,
                private jwtService: JwtService) {
    }

    @Get('link/:username')
    getLinks(@Param('username') username){
        return this.contentService.getLinks(username);
    }

    @Post('link')
    addLink(@Body() body, @Req() request, @Res() res){
        const json = this.jwtService.decode(request.headers.bearer, {json: true}) as {username: string};
        return this.contentService.addLink(body.url, body.title, json.username);
    }

    @Delete('link')
    deleteLink(@Param() param){
        throw new HttpException('Delete Endpoint Works', 420);
    }
}
