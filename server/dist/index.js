"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const main = async () => {
    await (0, typeorm_1.createConnection)({
        type: 'postgres',
        database: 'full-stack-jwt-auth-henry',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        logging: true,
        synchronize: true,
        entities: [User_1.User],
    });
};
main().catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map