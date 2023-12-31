import { NgModule } from '@angular/core';
import { NgbDatepickerModule, NgbModule, NgbPopoverModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './view/login-view/login-view.component';
import { HeaderComponent } from './shared/header/header.component';
import { FirstLoginViewComponent } from './view/first-login-view/first-login-view.component';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { PlayerDetailsViewComponent } from './view/internal/user/player-details-view/player-details-view.component';
import { PlayerGameSaveViewComponent } from './view/internal/user/player-game-save-view/player-game-save-view.component';
import { ButtonComponent } from './shared/button/button.component';
import { AdminPlayersViewComponent } from './view/internal/admin/admin-players-view/admin-players-view.component';
import { ManagerRewardsViewComponent } from './view/internal/admin/manager-rewards-view/manager-rewards-view.component';
import { MenuLateralComponent } from './shared/menu-lateral/menu-lateral.component';
import { WellcomeViewComponent } from './shared/wellcome-view/wellcome-view.component';
import { FormPlayerComponent } from './shared/form-player/form-player.component';
import { ModalFormPlayerComponent } from './shared/modal/modal-form-player/modal-form-player.component';
import { ModalGameSaveComponent } from './shared/modal/modal-game-save/modal-game-save.component';
import { DownloadViewComponent } from './view/download-view/download-view.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FallenShopViewComponent } from './view/fallen-shop-view/fallen-shop-view.component';
import { SaveProgressViewComponent } from './view/save-progress-view/save-progress-view.component';
import { SinopseViewComponent } from './shared/sinopse-view/sinopse-view.component';
import { SystemViewComponent } from './shared/system-view/system-view.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { CommonModule, JsonPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ManagerPokemonsComponent } from './view/internal/admin/manager-pokemons/manager-pokemons.component';
import { AwardWeekViewComponent } from './view/internal/admin/manager-rewards-view/award-week-view/award-week-view.component';
import { TypePokemonComponent } from './shared/form-award-item/type-pokemon/type-pokemon.component';
import { TypeItemComponent } from './shared/form-award-item/type-item/type-item.component';
import { ToastsComponent } from './shared/toasts/toasts.component';
import { PlayerManagerAwardsComponent } from './view/internal/user/player-manager-awards/player-manager-awards.component';
import { ModalGiftChoiceComponent } from './shared/modal/modal-gift-choice/modal-gift-choice.component';
import { TypePlayerComponent } from './shared/form-award-item/type-player/type-player.component';
import { ForgetPasswordViewComponent } from './view/forget-password-view/forget-password-view.component';
import { ForgetPasswordResetViewComponent } from './view/forget-password-reset-view/forget-password-reset-view.component';

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
    MenuLateralComponent,
    WellcomeViewComponent,
    FormPlayerComponent,
    ModalFormPlayerComponent,
    ModalGameSaveComponent,
    DownloadViewComponent,
    FooterComponent,
    FallenShopViewComponent,
    SaveProgressViewComponent,
    SinopseViewComponent,
    SystemViewComponent,
    LoadingComponent,
    ManagerPokemonsComponent,
    AwardWeekViewComponent,
    TypePokemonComponent,
    TypeItemComponent,
    ToastsComponent,
    PlayerManagerAwardsComponent,
    ModalGiftChoiceComponent,
    TypePlayerComponent,
    ForgetPasswordViewComponent,
    ForgetPasswordResetViewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbDatepickerModule,
    NgbPopoverModule,
    JsonPipe,
    NgbModule,
    NgbToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
