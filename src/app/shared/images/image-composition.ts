export class ImageComposition {
    imagePokemonBlob: any
    namePokemonImage!: String
    imageItemBlob: any
    nameItemImage!: String

    constructor(imagePokemonBlob: any, namePokemonImage: String, imageItemBlob: any, nameItemImage: String) {
        this.imagePokemonBlob = imagePokemonBlob
        this.namePokemonImage = namePokemonImage
        this.imageItemBlob = imageItemBlob
        this.nameItemImage = nameItemImage
    }
}
