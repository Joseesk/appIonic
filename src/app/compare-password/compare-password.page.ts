import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare-password',
  templateUrl: './compare-password.page.html',
  styleUrls: ['./compare-password.page.scss'],
})
export class ComparePasswordPage implements OnInit {
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(private alertController: AlertController, private router: Router) { }

  async changePassword(){
    if(this.newPassword === this.confirmNewPassword){
      //logica cambio contraseña.

      //alerta de exito
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'La contraseña se cambió correctamente.',
        buttons: ['OK'],
      });
      await alert.present();

      this.router.navigate(['/login']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
  ngOnInit() {}
}
