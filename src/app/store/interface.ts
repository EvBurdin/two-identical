export type ICard = {
    name: string,
    colors: string[],
    show: boolean,
    index: number
}

export enum IComplexity {
    EASY = 'EASY',
    NORMAL = 'NORMAL',
    HARD = 'HARD',
    INSANE = 'INSANE'
}

export type IColorPicker = (x: number) => string[][]

export type ICards = ICard[]