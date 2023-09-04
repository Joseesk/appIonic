import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComparePasswordPageRoutingModule } from './compare-password-routing.module';

import { ComparePasswordPage } from './compare-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComparePasswordPageRoutingModule
  ],
  declarations: [ComparePasswordPage]
})
export class ComparePasswordPageModule {}
