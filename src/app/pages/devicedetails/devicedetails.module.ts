import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicedetailsPageRoutingModule } from './devicedetails-routing.module';

import { DevicedetailsPage } from './devicedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicedetailsPageRoutingModule
  ],
  declarations: [DevicedetailsPage]
})
export class DevicedetailsPageModule {}
