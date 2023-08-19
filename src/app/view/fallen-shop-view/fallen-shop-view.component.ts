import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fallen-shop-view',
  templateUrl: './fallen-shop-view.component.html',
  styleUrls: ['./fallen-shop-view.component.css']
})
export class FallenShopViewComponent {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
