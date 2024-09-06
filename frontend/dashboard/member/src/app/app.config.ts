import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {provideRouter, withInMemoryScrolling, withRouterConfig} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {appThemeInit} from "./app.theme";
import {LocalStorageService} from "./layout/local.storage.service";
import {ThemeService} from "./layout/theme.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      })
    ),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: APP_INITIALIZER,
      useFactory: appThemeInit,
      multi: true,
      deps: [LocalStorageService, ThemeService],
    },
  ]
};
