import {WeekendProjectBackendApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import {DATASOURCE_NAME, DATASOURCE_PREFIX, DB_URL} from './const';

export {WeekendProjectBackendApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new WeekendProjectBackendApplication(options);

  const datasourceDb = require(`./datasources/${DATASOURCE_PREFIX}.datasource.config.json`);

  const updatedDatasourceDb = Object.assign({}, datasourceDb, {
    url: DB_URL,
  });

  app.bind(`datasources.config.${DATASOURCE_NAME}`).to(updatedDatasourceDb);

  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
