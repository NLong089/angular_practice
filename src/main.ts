import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideIndexedDb, DBConfig } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'TodoDB',
  version: 1,
  objectStoresMeta: [{
    store: 'todos',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'task', keypath: 'task', options: { unique: false } },
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'deadline', keypath: 'deadline', options: { unique: false } },
      { name: 'status', keypath: 'status', options: { unique: false } },
    ]
  }]};

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(App, {
  providers: [provideIndexedDb(dbConfig)],
});
