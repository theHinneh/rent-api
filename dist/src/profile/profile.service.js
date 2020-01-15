"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const profile_repository_1 = require("./profile.repository");
let ProfileService = class ProfileService {
    constructor(profileRepo) {
        this.profileRepo = profileRepo;
    }
    async createRent(user, profileDto, link) {
        return this.profileRepo.createRent(profileDto, user, await link);
    }
    getRent(user) {
        return this.profileRepo.ownnerGetRents(user);
    }
    async getRentById(id, user) {
        const found = await this.profileRepo.findOne({
            where: { id, owner: user.id },
        });
        if (!found) {
            throw new common_1.NotFoundException(`Reminder with ID "${id}" not found`);
        }
        return found;
    }
    async updateRent(id, update, user) {
        const input = await this.getRentById(id, user);
        input.additionalInfo = update.additionalInfo;
        input.areaName = update.areaName;
        input.category = update.category;
        input.city = update.city;
        input.images = update.images;
        input.landmark = update.landmark;
        input.numBedrooms = update.numBedrooms;
        input.phone = update.phone;
        input.region = update.region;
        await input.save();
        return input;
    }
    async deleteRent(id, user) {
        const result = await this.profileRepo.delete({ id, owner: user });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Reminder with ID "${id}" not found`);
        }
    }
};
ProfileService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(profile_repository_1.ProfileRepo)),
    __metadata("design:paramtypes", [profile_repository_1.ProfileRepo])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map