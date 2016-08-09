import { Component } from '@angular/core';
import { UserComponent } from './user.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginComponent} from './login.component';
import { AdalService } from 'angular2-adal/core';
import { SecretService } from './services/secret.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [SecretService]
})


export class AppComponent {
  title = 'Azure AD Demo App';
  constructor(
      private adalService: AdalService,
      private secretService: SecretService
      ){
      this.adalService.init(this.secretService.adalConfig);
  }
}
