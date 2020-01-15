"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_entity_1 = require("../src/auth/auth.entity");
const profile_entity_1 = require("../src/profile/profile.entity");
exports.typeOrmConfig = {
    entities: [auth_entity_1.User, profile_entity_1.Profile],
    type: 'postgres',
    synchronize: true,
    url: 'postgres://tgqbtuzbvxizos:69839986ba009e31769a2893178d3023408ba8302c8b234f61fb63296b20eebe@ec2-174-129-32-212.compute-1.amazonaws.com:5432/d9ppjjoqfqli9e',
};
//# sourceMappingURL=typeorm.config.js.map