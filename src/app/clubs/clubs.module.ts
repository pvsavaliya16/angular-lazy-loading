import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubListComponent } from './club-list/club-list.component';

@NgModule({
  declarations: [ClubListComponent],
  imports: [
    CommonModule,
    ClubsRoutingModule
  ]
})
export class ClubsModule {
  constructor() {
    console.log('Clubs module loaded');
    
  }
}

