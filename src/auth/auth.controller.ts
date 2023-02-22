import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService
    ) {
    }

    @Post('register')
    createProfile(@Body() body){
        const {username, password} = body;
        return this.authService.createProfile(username, password);
    }

    @Post('login')
    login(@Body() body){
        const {username, password} = body;
        return this.authService.login(username, password);
    }
}
