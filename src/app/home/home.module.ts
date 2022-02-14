import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SuperTabsModule,
    ComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
