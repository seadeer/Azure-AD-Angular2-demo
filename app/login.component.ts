import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdalService } from 'angular2-adal/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: 'app/login.component.html',
    directives: [ROUTER_DIRECTIVES],
})

export class LoginComponent implements OnInit{
    constructor(
        private router: Router,
        private adalService: AdalService
    ){
        this.adalService.handleWindowCallback();
        if (this.adalService.userInfo.isAuthenticated){
            this.router.navigate(['home']);
        }
    }

    public ngOnInit(){
        console.log('ngOnInit is called');
    }

    public logIn(){
        this.adalService.login();
    }
}
