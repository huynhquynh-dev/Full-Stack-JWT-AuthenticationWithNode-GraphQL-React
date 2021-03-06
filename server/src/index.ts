require('dotenv').config();
import 'reflect-metadata';

import { createConnection } from 'typeorm';
import { User } from './entities/User';

const main = async () => {
    await createConnection({
        type: 'postgres',
        database: 'full-stack-jwt-auth-henry',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        logging: true,
        synchronize: true,
        entities: [User],
    });
};

main().catch((err) => {
    console.log(err);
});
