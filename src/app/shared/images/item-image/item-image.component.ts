import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-image',
  templateUrl: './item-image.component.html',
  styleUrls: ['./item-image.component.css']
})
export class ItemImageComponent implements OnInit {
  

  @Input()
  imageBlob: any
  @Input()
  nameImage!: String
  @Input()
  extraClassesCss!: string
  classes: string = "text-center"

  ngOnInit(): void {
    this.classes = this.classes.concat(' ').concat(this.extraClassesCss)
  }
}

