import {Body, Controller, Get, Param, Put} from '@nestjs/common';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService
    ) {
    }

    @Put('register')
    createProfile(@Body() body){
        const {username, password} = body;
        return this.authService.createProfile(username, password);
    }
}
