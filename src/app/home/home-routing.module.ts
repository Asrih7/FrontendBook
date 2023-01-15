import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'html',
    loadChildren: () => import('./html/html.module').then(m => m.HtmlPageModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./css/css.module').then(m => m.CssPageModule)
  },
  {
    path: 'javascript',
    loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptPageModule)
  },
  {
    path: 'typescript',
    loadChildren: () => import('./typescript/typescript.module').then(m => m.TypescriptPageModule)
  },
  {
    path: 'angular',
    loadChildren: () => import('./angular/angular.module').then(m => m.AngularPageModule)
  },
  {
    path: 'react',
    loadChildren: () => import('./react/react.module').then(m => m.ReactPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
