import { Component } from '@angular/core';
import { Token } from './token';
import { AdalService } from 'angular2-adal/core';
import { ProtectedDirective } from "./directives/protected.directive";

@Component({
  selector: 'user-info',
  templateUrl: 'app/user.component.html',
  directives: [ProtectedDirective],
})
export class UserComponent {
  constructor(
    private adalService: AdalService,
    //private userInfo: Token
  ){ 

  }

  ngOnInit(){}

}
