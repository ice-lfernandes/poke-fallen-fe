import { Component, Input } from '@angular/core';
import { ForgetPasswordService } from 'src/app/service/integration/forget-password.service';
import { ToastService } from 'src/app/shared/toasts/toast-service.service';

@Component({
  selector: 'app-forget-password-view',
  templateUrl: './forget-password-view.component.html',
  styleUrls: ['./forget-password-view.component.css']
})
export class ForgetPasswordViewComponent {

  @Input()
  email!: string
  loading: boolean = false
  requestForgetPasswordWasSuccess: boolean = false
  

  constructor(private forgetPasswordService: ForgetPasswordService, private toastService: ToastService) {

  }

  requestForgetPassword() {
    this.loading = true
    this.requestForgetPasswordWasSuccess = false
    this.forgetPasswordService.requestForgetPassword(this.email).subscribe(
      {
        next: () => {
          this.loading = false
          this.toastService.show('Solicitação de token enviado com sucesso!', { classname: 'bg-success text-light', delay: 10000 });
          this.requestForgetPasswordWasSuccess = true
        },
        error: error => {
          console.log(error)
          this.toastService.show('Não foi informado email válido para esquecimento de senha!', { classname: 'bg-danger text-light', delay: 10000 });
          this.loading = false
        },
        complete: () => {
          this.loading = false
        }
      }
    )
  }

}
