import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentListComponent } from './tournaments/tournament-list/tournament-list.component';
import { ClubListComponent } from './clubs/club-list/club-list.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';

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
  },
  {
    path:'register',
    component: ReactiveFormDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
