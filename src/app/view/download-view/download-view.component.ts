import { Component } from '@angular/core';

import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-download-view',
  templateUrl: './download-view.component.html',
  styleUrls: ['./download-view.component.css']
})
export class DownloadViewComponent {

  faArrowRight = faArrowRight
  faDownload = faDownload

}
