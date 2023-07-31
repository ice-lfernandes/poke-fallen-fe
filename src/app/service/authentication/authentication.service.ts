import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationClientService } from './authentiocation-client.service';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User | undefined

  constructor(private router: Router, private authenticationClient: AuthenticationClientService) { }

  authenticate(username: string, password: string) {
    try {
      this.authenticationClient.authenticate(username, password)
        .subscribe(response => this.user = response)

      if (this.user === null) return false

      sessionStorage.setItem('token', this.user!.token)
      sessionStorage.setItem('playerId', this.user!.playerId)
      sessionStorage.setItem('roles', this.user!.roles.join(","))
      return true;
    } catch (error) {
      console.log('login error')
      return false
    }
  }

  logout() {
    sessionStorage.clear()
    this.user = undefined
    this.router.navigate(['login'])
  }

  isUserLoggedIn(): boolean {
    let token = sessionStorage.getItem('token')
    return !(token === null)
  }

  isUserAllowedByRole(role: string): boolean {
    return this.isUserLoggedIn() && sessionStorage.getItem('roles')!.includes(role)
  }
}
