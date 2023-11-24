import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';


import { ForgetPasswordService } from 'src/app/service/integration/forget-password.service';
import { TokenResetPassword } from 'src/app/service/integration/model/response/token-reset-password';
import { ToastService } from 'src/app/shared/toasts/toast-service.service';
import { environment } from 'src/environments/environment';


const baseUrlHome: string = environment.siteUrl + '/home'
@Component({
  selector: 'app-forget-password-reset-view',
  templateUrl: './forget-password-reset-view.component.html',
  styleUrls: ['./forget-password-reset-view.component.css']
})
export class ForgetPasswordResetViewComponent {


  @Input()
  token!: string
  loading: boolean = false
  faIconResult!: IconProp
  classIcon!: string
  resetPasswordAuthorized: boolean = false
  newPassword!: string
  newPasswordConfirmation!: string
  passwordUpatedSuccess: boolean = false
  tokenResetPassword!: TokenResetPassword

  constructor(private forgetPasswordService: ForgetPasswordService, 
    private toastService: ToastService, 
    private router: Router) {

  }

  checkToken() {
    this.loading = true
    this.forgetPasswordService.checkTokenForAuthorizeResetPassword(this.token).subscribe(
      {
        next: (response) => {
          this.tokenResetPassword = response
          this.toastService.show('Token validado sucesso!', { classname: 'bg-success text-light', delay: 10000 });
          this.faIconResult = faCircleCheck
          this.classIcon = "icon-span-input-success"
          this.loading = false
          setTimeout(() => {
            this.resetPasswordAuthorized = true
          }, 500);
        },
        error: error => {
          console.log(error)
          this.toastService.show('Token invalido!', { classname: 'bg-danger text-light', delay: 10000 });
          this.loading = false
          this.faIconResult = faXmark
          this.classIcon = "icon-span-input-error"
        },
        complete: () => {
          this.loading = false
        }
      }
    )
  }

  resetPassword() {
    this.loading = true
    if (this.newPassword === this.newPasswordConfirmation) {
      this.forgetPasswordService.resetPassword(this.tokenResetPassword.email, this.newPassword).subscribe({
        next: (response) => {
          this.tokenResetPassword = response
          this.toastService.show('Senha cadastrada sucesso!', { classname: 'bg-success text-light', delay: 10000 });
          this.loading = false
          setTimeout(() => {
            this.router.navigate(['/login'])
          }, 500)
        },
        error: error => {
          console.log(error)
          this.toastService.show('Erro ao cadastrar nova senha!', { classname: 'bg-danger text-light', delay: 10000 });
          this.classIcon = "icon-span-input-error"
        },
        complete: () => {
          this.loading = false
        }
      })
    } else {
      this.loading = false
      this.toastService.show('Senhas não batem!', { classname: 'bg-danger text-light', delay: 10000 });
    }
  }

}
