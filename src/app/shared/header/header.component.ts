import { Component } from '@angular/core';

import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public loginService: AuthenticationService) { }

  faArrowUpFromBracket = faArrowUpFromBracket

  logout() {
    this.loginService.logout()
  }

}
