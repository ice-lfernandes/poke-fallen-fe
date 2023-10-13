import { Component } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { faSearch, faCalendarDays, faEye, faPencil } from '@fortawesome/free-solid-svg-icons';

import { AwardWeekService } from 'src/app/service/integration/award-week.service';
import { StatusAwardWeek } from 'src/app/service/integration/model/commons/status-award-week';
import { AwardWeek } from 'src/app/service/integration/model/commons/award-week';
import { formatDate } from '@angular/common';

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

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter,
    private awardWeekService: AwardWeekService) {
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


  search() {
    this.awardWeekSelected = false
    this.loading = true
    let foundData = false
    this.awardWeekList = []

    if (this.validateInput(this.fromDate, this.dateToString(this.toDate))) {
      this.awardWeekService.findByRangeDatas(this.dateToString(this.fromDate), this.dateToString(this.toDate), this.status)
        .subscribe({
          next: response => {
            this.awardWeekList = response
            this.loading = false
            foundData = true
          },
          error: error => {
            console.log(error)
            this.loading = false
            foundData = false
          }
        })
    }

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

  formatDateTime(date: Date): String {
    return formatDate(date, "dd/MM/yyyy HH:mm", 'en-US')
  }

}
