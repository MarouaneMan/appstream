
const config = {
    host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT,
    ttl: 120
}

export default config;