import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  username: string = ''
  password: string = ''
  invalidLogin: boolean | undefined

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  async checkLogin() {
    if (await this.loginservice.authenticate(this.username, this.password)) {
      this.invalidLogin = false
      this.router.navigate([''])
    } else
      this.invalidLogin = true
  }

}