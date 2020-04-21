import { config } from 'dotenv';

config();

const { env } = process;

const serverConfig = {
  mongoConnectionString: `mongodb://${env.DATABASE_USER}:${env.DATABASE_PASS}@${env.DATABASE_HOST}:${env.DATABASE_PORT}/${env.DATABASE_NAME}`,
  jwtSecret: `${env.JWT_SECRET}`,
  port: `${env.GRAPHQL_PORT}`
};

export default serverConfig;
