export class TransferIntentRequest {
    constructor(public playerIdDestination: string, public awardItemId: number) {
        this.playerIdDestination = playerIdDestination
        this.awardItemId = awardItemId
    }
}
