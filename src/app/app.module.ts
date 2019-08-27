import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms/' 
import { NgModule } from '@angular/core';
import { ClubsModule } from './clubs/clubs.module'
import { TournamentsModule } from './tournaments/tournaments.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TournamentsModule,
    ClubsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
