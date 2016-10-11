import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './clientApp.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule)