import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: String = '';

  constructor(private router: Router) {}

  onLogin() {
    // Logica inicio sesión.

    // Ruta
    this.router.navigate(['/user-main-page', { userName: this.userName}]);
  }
  ngOnInit() {}
}
