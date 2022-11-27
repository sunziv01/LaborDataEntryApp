import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { DashboardModule } from './app/dashboard/dashboard.module';
import { LoginModule } from './app/login/login.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
platformBrowserDynamic().bootstrapModule(DashboardModule)
  .catch(err => console.error(err));
