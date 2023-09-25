import { DomSanitizer } from "@angular/platform-browser"

export class PokemonImage {
    name: String = ""
    image: String[] = []
    imageBlob: any

    constructor(private sanitizer: DomSanitizer) {
        
    }

    convertImage() {
        console.log('convertendo')
        let objectURL = 'data:image/jpeg;base64,' + this.image
        this.imageBlob = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
}
