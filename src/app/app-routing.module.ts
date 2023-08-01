import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginViewComponent } from './view/login-view/login-view.component';
import { FirstLoginViewComponent } from './view/first-login-view/first-login-view.component';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { PlayerDetailsViewComponent } from './view/internal/player-details-view/player-details-view.component';
import { PlayerGameSaveViewComponent } from './view/internal/player-game-save-view/player-game-save-view.component';
import { AuthGaurdService } from './service/authentication/auth/authguard.service';
import { AdminPlayersViewComponent } from './view/internal/admin-players-view/admin-players-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'home', component: HomeViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'first-login', component: FirstLoginViewComponent },
  { path: 'player-details', component: PlayerDetailsViewComponent, canActivate: [AuthGaurdService] },
  { path: 'player-game-save', component: PlayerGameSaveViewComponent, canActivate: [AuthGaurdService] },
  { path: 'players-details', component: AdminPlayersViewComponent, canActivate: [AuthGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }