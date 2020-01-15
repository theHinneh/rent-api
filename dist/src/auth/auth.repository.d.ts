import { Repository } from 'typeorm';
import { UserDto } from './auth.dto';
import { User } from './auth.entity';
export declare class UserRepo extends Repository<User> {
    signUp(userDto: UserDto): Promise<User>;
    private hashPassword;
    validateUser(authCredentialsDto: UserDto): Promise<User>;
}
