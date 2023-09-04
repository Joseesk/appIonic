import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserMainPagePageRoutingModule } from './user-main-page-routing.module';

import { UserMainPagePage } from './user-main-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserMainPagePageRoutingModule
  ],
  declarations: [UserMainPagePage]
})
export class UserMainPagePageModule {}
