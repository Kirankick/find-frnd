import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicedetailsPage } from './devicedetails.page';

const routes: Routes = [
  {
    path: '',
    component: DevicedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicedetailsPageRoutingModule {}
