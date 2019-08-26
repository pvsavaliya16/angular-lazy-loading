import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClubsModule } from './clubs/clubs.module'
import { TournamentsModule } from './tournaments/tournaments.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TournamentsModule,
    ClubsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
