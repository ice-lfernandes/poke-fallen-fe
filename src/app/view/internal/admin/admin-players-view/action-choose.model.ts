export enum ActionChoice {
    NOT_CHOICE,
    INFORMATION,
    GAME_SAVE,
    DONATIONS
}

export function valueOfActionChoice(value: String): ActionChoice {
    return ActionChoice[value as keyof typeof ActionChoice]
}