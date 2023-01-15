import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypescriptPageRoutingModule } from './typescript-routing.module';

import { TypescriptPage } from './typescript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypescriptPageRoutingModule
  ],
  declarations: [TypescriptPage]
})
export class TypescriptPageModule {}
