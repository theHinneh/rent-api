"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const profile_entity_1 = require("./profile.entity");
let ProfileRepo = class ProfileRepo extends typeorm_1.Repository {
    async createRent(profileDto, user, link) {
        const imageLink = await link;
        const rent = new profile_entity_1.Profile();
        rent.additionalInfo = profileDto.additionalInfo;
        rent.areaName = profileDto.areaName;
        rent.category = profileDto.category;
        rent.city = profileDto.city;
        rent.landmark = profileDto.landmark;
        rent.numBedrooms = profileDto.numBedrooms;
        rent.phone = profileDto.phone;
        rent.region = profileDto.region;
        try {
            rent.images = await imageLink.path;
        }
        catch (err) {
            rent.images = ' ';
        }
        rent.owner = user;
        try {
            await rent.save();
            delete rent.owner;
            return rent;
        }
        catch (err) {
            throw new common_1.BadRequestException(err.message);
        }
    }
    async ownnerGetRents(user) {
        const query = this.createQueryBuilder('rents');
        query.where('rents.owner = :owner', { owner: user.id });
        const rents = await query.getMany();
        return rents;
    }
    async getAllRents() {
        const query = this.createQueryBuilder('rents');
        const rents = await query.getMany();
        return rents;
    }
};
ProfileRepo = __decorate([
    typeorm_1.EntityRepository(profile_entity_1.Profile)
], ProfileRepo);
exports.ProfileRepo = ProfileRepo;
//# sourceMappingURL=profile.repository.js.map