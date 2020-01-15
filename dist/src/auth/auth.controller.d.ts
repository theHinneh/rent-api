import { UserDto } from './auth.dto';
import { User } from './auth.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(userDto: UserDto): Promise<User>;
    signIn(userDto: UserDto): Promise<{
        accessToken: string;
    }>;
}
