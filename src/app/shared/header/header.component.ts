import { Component } from '@angular/core';

import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // icons
  faRightFromBracket = faRightFromBracket
  faCircleUser = faCircleUser
  usernameLogged = sessionStorage.getItem('username')


  constructor(public loginService: AuthenticationService) { }


  logout() {
    this.loginService.logout()
  }



}
