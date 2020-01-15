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
const passport_1 = require("@nestjs/passport");
const platform_express_1 = require("@nestjs/platform-express");
const get_user_decorator_1 = require("../auth/jwt/get-user.decorator");
const auth_entity_1 = require("../auth/auth.entity");
const profile_update_dto_1 = require("./profile-update.dto");
const profile_dto_1 = require("./profile.dto");
const profile_service_1 = require("./profile.service");
const gcs_dto_1 = require("./gcs.dto");
const MulterGoogleCloudStorage = require('multer-google-storage');
let ProfileController = class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    async createRent(user, profileDto, images) {
        return this.profileService.createRent(user, profileDto, await images);
    }
    getRent(user) {
        return this.profileService.getRent(user);
    }
    updateRent(id, update, user) {
        return this.profileService.updateRent(id, update, user);
    }
    deleteRent(id, user) {
        return this.profileService.deleteRent(id, user);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('images', {
        storage: new MulterGoogleCloudStorage.storageEngine(),
    })),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, get_user_decorator_1.GetUser()),
    __param(1, common_1.Body()),
    __param(2, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_entity_1.User,
        profile_dto_1.ProfileDto,
        gcs_dto_1.GCSDto]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "createRent", null);
__decorate([
    common_1.Get(),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_entity_1.User]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getRent", null);
__decorate([
    common_1.Patch('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body()),
    __param(2, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, profile_update_dto_1.ProfileUpdate,
        auth_entity_1.User]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updateRent", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, auth_entity_1.User]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "deleteRent", null);
ProfileController = __decorate([
    common_1.Controller('profile'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileController);
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile.controller.js.map