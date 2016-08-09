import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login.component';
import { UserComponent } from './user.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'home',
        component: UserComponent,
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
