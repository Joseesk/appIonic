import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserMainPagePage } from './user-main-page.page';

const routes: Routes = [
  {
    path: '',
    component: UserMainPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserMainPagePageRoutingModule {}
