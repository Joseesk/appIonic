import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email: String = '';


  constructor(private router: Router) { }

  submitMail(){
    //Logica de busqueda de mail en la base de datos
    if(this.email !== null){
      console.log(this.email);
    }

    //Redirección a la página
    this.router.navigate(['/compare-password']);
  }

  ngOnInit() {
  }

}
