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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const auth_entity_1 = require("../auth/auth.entity");
let Profile = class Profile extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Profile.prototype, "category", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Profile.prototype, "numBedrooms", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Profile.prototype, "region", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Profile.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Profile.prototype, "areaName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Profile.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Profile.prototype, "landmark", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Profile.prototype, "additionalInfo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Profile.prototype, "images", void 0);
__decorate([
    typeorm_1.ManyToOne(type => auth_entity_1.User, user => user.profile, { eager: false }),
    __metadata("design:type", auth_entity_1.User)
], Profile.prototype, "owner", void 0);
Profile = __decorate([
    typeorm_1.Entity()
], Profile);
exports.Profile = Profile;
//# sourceMappingURL=profile.entity.js.map