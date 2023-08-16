import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {

  email: string = ''
  password: string = ''
  invalidLogin: boolean | undefined

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  async checkLogin() {
    console.log('inicou login')

    this.invalidLogin = false
    await this.loginservice.authenticate(this.email, this.password)

    if (this.loginservice.isUserLoggedIn()) {
      if (this.loginservice.isUserAllowedByRole("USER")) {
        this.router.navigate(['/player-details'])
      } else {
        this.router.navigate(['/players-details'])
      }
    } else {
      console.log('erro login')
      this.invalidLogin = true
    }
  }

}
