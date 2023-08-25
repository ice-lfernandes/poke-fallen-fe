import { Component } from '@angular/core';
import { faDiscord, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  // icons
  faWhatsapp = faWhatsapp
  faFacebook = faFacebook
  faDiscord = faDiscord
  faInstragram = faInstagram

}
