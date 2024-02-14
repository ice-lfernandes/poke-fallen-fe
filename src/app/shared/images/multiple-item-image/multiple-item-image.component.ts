import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ImageComposition } from '../image-composition';

@Component({
  selector: 'app-multiple-item-image',
  templateUrl: './multiple-item-image.component.html',
  styleUrls: ['./multiple-item-image.component.css']
})
export class MultipleItemImageComponent implements OnInit {

  // Icons
  faPlus = faPlus

  @Input()
  extraClassesCss!: string
  classes: string = "text-center"
  @Input()
  imageclass!: string
  @Input()
  images!: ImageComposition[]

  ngOnInit(): void {
    this.classes = this.classes.concat(' ').concat(this.extraClassesCss)
  }

}
