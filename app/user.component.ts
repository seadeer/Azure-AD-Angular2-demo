import { Component } from '@angular/core';
import { Token } from './token';

@Component({
  selector: 'user-info',
  templateUrl: 'user.component.html',
  styleUrls: ['app.component.css']
})
export class UserComponent {
  constructor(
    userInfo: Token
  ){ }

  ngOnInit(){}

}
