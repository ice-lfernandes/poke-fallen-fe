import { Component, Input, OnInit } from '@angular/core';
import { ImageComposition } from '../image-composition';
import { CarroselItem } from 'src/app/utils/carrosel-item';

@Component({
  selector: 'app-choice-pokemon-image',
  templateUrl: './choice-pokemon-image.component.html',
  styleUrls: ['./choice-pokemon-image.component.css']
})
export class ChoicePokemonImageComponent implements OnInit{
  

  @Input()
  images!: ImageComposition[]
  carrosel: Array<CarroselItem> = []
  showNavigationArrows = true
  showNavigationIndicators = false


  ngOnInit(): void {
    this.images.forEach(image => {
      this.carrosel.push(new CarroselItem(
        image.namePokemonImage,
        undefined,
        image.imagePokemonBlob
      ))
    })
  }
}
