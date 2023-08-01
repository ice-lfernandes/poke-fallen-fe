import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './view/login-view/login-view.component';
import { HeaderComponent } from './shared/header/header.component';
import { FirstLoginViewComponent } from './view/first-login-view/first-login-view.component';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { PlayerDetailsViewComponent } from './view/internal/player-details-view/player-details-view.component';
import { PlayerGameSaveViewComponent } from './view/internal/player-game-save-view/player-game-save-view.component';
import { ButtonComponent } from './shared/button/button.component';
import { AdminPlayersViewComponent } from './view/internal/admin-players-view/admin-players-view.component';
import { ManagerRewardsViewComponent } from './view/internal/manager-rewards-view/manager-rewards-view.component';
import { MenuLateralComponent } from './shared/menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    HeaderComponent,
    FirstLoginViewComponent,
    HomeViewComponent,
    PlayerDetailsViewComponent,
    PlayerGameSaveViewComponent,
    ButtonComponent,
    AdminPlayersViewComponent,
    ManagerRewardsViewComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
