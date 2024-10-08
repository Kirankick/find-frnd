import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdModalPageRoutingModule } from './ad-modal-routing.module';

import { AdModalPage } from './ad-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdModalPageRoutingModule
  ],
  declarations: [AdModalPage]
})
export class AdModalPageModule {}
