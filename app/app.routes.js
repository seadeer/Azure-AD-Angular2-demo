"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var user_component_1 = require('./user.component');
var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'home',
        component: user_component_1.UserComponent,
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map