"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('angular2-adal/core');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var router_1 = require('@angular/router');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [core_1.AdalService, app_routes_1.appRouterProviders, router_1.ROUTER_DIRECTIVES]);
//# sourceMappingURL=main.js.map