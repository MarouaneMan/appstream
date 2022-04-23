export declare global {

    namespace NodeJS {
        
        interface ProcessEnv {
            readonly NODE_ENV: 'production' | 'developement';
            readonly DATABASE_HOST: string;
            readonly DATABASE_PORT: string;
            readonly DATABASE_USER: string;
            readonly DATABASE_PASSWORD:string;
            readonly DATABASE_NAME: string;
        }

    }
}