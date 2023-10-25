import { Component } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { faSearch, faCalendarDays, faEye, faPencil, faShuffle } from '@fortawesome/free-solid-svg-icons';

import { AwardWeekService } from 'src/app/service/integration/award-week.service';
import { StatusAwardWeek } from 'src/app/service/integration/model/commons/status-award-week';
import { AwardWeek } from 'src/app/service/integration/model/commons/award-week';
import { formatDate } from '@angular/common';
import { AwardWeekLotteryService } from 'src/app/service/integration/award-week-lottery.service';
import { ToastService } from 'src/app/shared/toasts/toast-service.service';

@Component({
  selector: 'app-manager-rewards-view',
  templateUrl: './manager-rewards-view.component.html',
  styleUrls: ['./manager-rewards-view.component.css']
})
export class ManagerRewardsViewComponent {

  statusList = ["", "Agendado", "Finalizado"]
  faCalendarDays = faCalendarDays
  faSearch = faSearch
  faEye = faEye
  faShuffle = faShuffle
  faPencil = faPencil

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;


  status: StatusAwardWeek | undefined
  awardWeekList: AwardWeek[] = []
  loading: boolean = false
  statusSelect: String = "0"
  awardWeekSelected = false
  awardWeek!: AwardWeek

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private toastService: ToastService,
    private awardWeekService: AwardWeekService, private lotteryAwardService: AwardWeekLotteryService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  lottery() {
    this.loading = true
    this.lotteryAwardService.lottery().subscribe(
      {
        next: response => {
          console.log("sorteio realizado")
          this.toastService.show('Sorteio realizado com sucesso!', { classname: 'bg-success text-light', delay: 10000 });
          this.loading = false
        },
        error: error => {
          console.log(error)
          this.toastService.show('Erro ao realizar Sorteio!', { classname: 'bg-danger text-light', delay: 10000 });
          this.loading = false
        }
      }
    )
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  onChange(eventValue: String) {
    if (eventValue === "Finalizado") {
      this.status = StatusAwardWeek.FINISHED
      return
    } else if (eventValue === "Agendado") {
      this.status = StatusAwardWeek.SCHEDULED
      console.log(this.status)
    } else {
      this.status = undefined
    }
  }

  detailAwardWeek(awardWeek: AwardWeek) {
    this.awardWeekSelected = true
    this.awardWeek = awardWeek
  }

  disabledLottery(awardWeek: AwardWeek): boolean {
    return awardWeek.status == 'Finalizado'
  }


  search() {
    this.awardWeekSelected = false
    this.loading = true
    this.awardWeekList = []

    if (this.validateInput(this.fromDate, this.dateToString(this.toDate))) {
      this.getAwardWeeksByRange()
    }

  }

  private getAwardWeeksByRange() {
    this.loading = true
    this.awardWeekService.findByRangeDatas(this.dateToString(this.fromDate), this.dateToString(this.toDate), this.status)
      .subscribe({
        next: response => {
          this.awardWeekList = response
          this.loading = false
        },
        error: error => {
          console.log(error)
          this.loading = false
        }
      })
  }



  private dateToString(date: NgbDate | null) {
    if (date) {
      let year = date.year
      let month = date.month < 10 ? "0" + date.month : date.month
      let day = date.day < 10 ? "0" + date.day : date.day
      return year + "-" + month + "-" + day
    } else {
      return ""
    }
  };

  formatDate(date: Date): String {
    return formatDate(date, "dd/MM/yyyy", 'en-US')
  }

  formatDateTime(date: Date): String {
    return formatDate(date, "HH:mm", 'en-US')
  }

}
