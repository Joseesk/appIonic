import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComparePasswordPage } from './compare-password.page';

const routes: Routes = [
  {
    path: '',
    component: ComparePasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComparePasswordPageRoutingModule {}
