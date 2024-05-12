import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations:[
    ListComponent,
    InfoComponent
  ],
  exports:[
    ListComponent,
    InfoComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroModule {}
