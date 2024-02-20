import { Component, OnInit } from '@angular/core';
import { CarroselItem } from 'src/app/utils/carrosel-item';

@Component({
  selector: 'app-system-view',
  templateUrl: './system-view.component.html',
  styleUrls: ['./system-view.component.css']
})
export class SystemViewComponent implements OnInit {

  images: Array<CarroselItem> = []
  showNavigationArrows = true
  showNavigationIndicators = false

  ngOnInit(): void {
    this.images.push(new CarroselItem(
      "Loots: Cada monstrinho pode dropar um item ao fim da batalha, itens desde itens básico até itens raros",
      "../../../assets/images/image 2.png",
      undefined
    ))
    this.images.push(new CarroselItem(
      "Seus monstrinhos de bolso querem ficar ao seu lado, eles podem ficar fora da Pokebola",
      "../../../assets/images/pokemon-open-world.png",
      undefined
    ))
    this.images.push(new CarroselItem(
      "Sistema de Outifits (Customize seu Personagem)",
      "../../../assets/images/image 3.png",
      undefined
    ))
    this.images.push(new CarroselItem(
      "Performance. Você pode melhorar seu companheiro de equipe conforme ele ganha batalhas. Seus pontos de dano e nocautes causados aumentam e isso pode melhorar a sua força! (Stats)",
      "../../../assets/images/performance.png",
      undefined
    ))
  }


}
