import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPageRoutingModule } from './home/tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    IonicModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
