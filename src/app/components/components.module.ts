import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NewsListComponent } from './news-list/news-list.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { PipesModule } from '../pipes/pipes/pipes.module';



@NgModule({
  declarations: [
    NewsListComponent,
    NewsCardComponent
  ],
  exports: [
    NewsListComponent,
    NewsCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
