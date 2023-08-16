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

  async authenticate(username: string, password: string) {
    const user = await this.authenticationClient.authenticate(username, password)
    this.user = user

    sessionStorage.setItem('token', this.user!.token)
    sessionStorage.setItem('username', this.user!.username)
    sessionStorage.setItem('email', this.user!.email)
    sessionStorage.setItem('playerId', this.user!.playerId)
    sessionStorage.setItem('roles', this.user!.roles.join(","))
  }

  logout() {
    sessionStorage.clear()
    this.user = undefined
    this.router.navigate(['home'])
  }

  isUserLoggedIn(): boolean {
    let token = sessionStorage.getItem('token')
    return !(token === null)
  }

  isUserAllowedByRole(role: string): boolean {
    return this.isUserLoggedIn() && sessionStorage.getItem('roles')!.includes(role)
  }
}

