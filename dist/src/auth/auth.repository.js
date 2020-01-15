"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const typeorm_1 = require("typeorm");
const auth_entity_1 = require("./auth.entity");
let UserRepo = class UserRepo extends typeorm_1.Repository {
    async signUp(userDto) {
        const { username, password } = userDto;
        const user = new auth_entity_1.User();
        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        try {
            await user.save();
            delete user.password;
            delete user.salt;
            delete user.id;
            return user;
        }
        catch (err) {
            if (err.code === '23505' || 'ER_DUP_ENTRY') {
                throw new common_1.ConflictException('Username already exists');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
    async validateUser(authCredentialsDto) {
        const { username, password } = authCredentialsDto;
        const user = await this.findOne({ username });
        if (user && (await user.validatePassword(password))) {
            return user;
        }
        else {
            return null;
        }
    }
};
UserRepo = __decorate([
    typeorm_1.EntityRepository(auth_entity_1.User)
], UserRepo);
exports.UserRepo = UserRepo;
//# sourceMappingURL=auth.repository.js.map