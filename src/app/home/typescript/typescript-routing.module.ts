import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypescriptPage } from './typescript.page';

const routes: Routes = [
  {
    path: '',
    component: TypescriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypescriptPageRoutingModule {}
