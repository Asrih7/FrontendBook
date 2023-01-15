import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactPageRoutingModule } from './react-routing.module';

import { ReactPage } from './react.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactPageRoutingModule
  ],
  declarations: [ReactPage]
})
export class ReactPageModule {}
