import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentListComponent } from './tournaments/tournament-list/tournament-list.component';
import { ClubListComponent } from './clubs/club-list/club-list.component';

const routes: Routes = [
  // {
  //   path: 'tournaments',
  //   loadChildren: () => import('./tournaments/tournaments.module').then(mod => mod.TournamentsModule)
  // },
  // {
  //   path: 'clubs',
  //   loadChildren: () => import('./clubs/clubs.module').then(mod => mod.ClubsModule)
  // },
  {
    path:'tournaments',
    component: TournamentListComponent
  },
  {
    path:'clubs',
    component: ClubListComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
