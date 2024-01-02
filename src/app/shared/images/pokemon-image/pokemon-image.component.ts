import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.css']
})
export class PokemonImageComponent implements OnInit {
  

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
