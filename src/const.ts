export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0-dtd7i.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
export const DATASOURCE_PREFIX = process.env.DATASOURCE_PREFIX;
export const DATASOURCE_NAME = process.env.DATASOURCE_NAME;
