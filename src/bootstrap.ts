import { bootstrapApplication } from '@angular/platform-browser';
import { mergeApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ConfigService } from './app/config.service';

function initConfig(cfg: ConfigService) {
  return () => cfg.load();
}

const runtimeConfig = {
  providers: [
    provideHttpClient(),
    ConfigService,
    { provide: APP_INITIALIZER, useFactory: initConfig, deps: [ConfigService], multi: true }
  ]
};

bootstrapApplication(App, mergeApplicationConfig(appConfig, runtimeConfig))
  .catch(err => console.error(err));
