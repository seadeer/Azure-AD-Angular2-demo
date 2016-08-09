import { bootstrap } from '@angular/platform-browser-dynamic';
import { AdalService } from 'angular2-adal/core';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { ROUTER_DIRECTIVES } from '@angular/router'
import {SecretService} from './services/secret.service';

bootstrap(AppComponent, [AdalService, appRouterProviders, ROUTER_DIRECTIVES]);
