import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { fadeInContent } from '@angular/material';

@Component({
  selector: 'dbs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  submitting = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {

    this.submitting = true;
    this.authService.login(this.username, this.password).subscribe(
      result => {
        if (result) {
          this.router.navigate(['/']);
        } else {
          console.log('invalid username or password');
        }
      },
      null,
      () => {
        this.submitting = false;
      }
    );
  }
}
