import { JwtService } from '@nestjs/jwt';
import { UserDto } from './auth.dto';
import { User } from './auth.entity';
import { UserRepo } from './auth.repository';
export declare class AuthService {
    private readonly userRepo;
    private readonly jwtService;
    constructor(userRepo: UserRepo, jwtService: JwtService);
    signUp(userDto: UserDto): Promise<User>;
    signIn(userDto: UserDto): Promise<{
        accessToken: string;
    }>;
}
