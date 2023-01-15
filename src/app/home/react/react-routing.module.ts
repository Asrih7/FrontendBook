import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactPage } from './react.page';

const routes: Routes = [
  {
    path: '',
    component: ReactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactPageRoutingModule {}
