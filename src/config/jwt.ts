import { JwtModuleOptions } from '@nestjs/jwt';

const config:JwtModuleOptions = {
    secret: process.env.JWT_SECRET,
    signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN
    }
}

export default config;