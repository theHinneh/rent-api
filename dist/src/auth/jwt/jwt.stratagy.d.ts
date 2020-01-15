import { JwtPayload } from './jwt-payload.interface';
import { UserRepo } from '../auth.repository';
import { User } from '../auth.entity';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepo);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
