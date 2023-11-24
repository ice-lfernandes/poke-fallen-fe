import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {

  email!: string
  password!: string
  invalidLogin: boolean | undefined
  loading: boolean = false

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  async checkLogin() {
    this.invalidLogin = false
    this.loading = true
    try {

      await this.loginservice.authenticate(this.email, this.password)
      
      this.loading = false

      if (this.loginservice.isUserLoggedIn()) {
        if (this.loginservice.isUserAllowedByRole("USER")) {
          this.router.navigate(['/player-details'])
        } else {
          this.router.navigate(['/players-details'])
        }
      } else {
        this.invalidLogin = true
      }
    } catch (error) {
      console.log(error)
      this.invalidLogin = true
      this.loading = false
    }
  }

}
