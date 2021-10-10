import { copy, getNewArray } from "app/utils";
import { ICards, IComplexity } from "./interface"

const { createHmac } = require('crypto');

export class NewCards {
    private cardConst = [
        //green
        'rgb(0, 102, 0)', 'rgb(0, 204, 0)', 'rgb(51, 255, 51)', 'rgb(153, 255, 153)',
        //blue
        'rgb(0, 34, 102)', 'rgb(0, 68, 204)', 'rgb(51, 119, 255)', 'rgb(153, 187, 255)',
        //red
        'rgb(102, 34, 0)', 'rgb(204, 68, 0)', 'rgb(255, 119, 51)', 'rgb(255, 187, 153)',
        //fiol
        'rgb(102, 0, 102)', 'rgb(204, 0, 204)', 'rgb(255, 51, 255)', 'rgb(255, 153, 255)',
        //black
        'rgb(0, 0, 0)', 'rgb(77, 77, 77)', 'rgb(153, 153, 153)', 'rgb(230, 230, 230)'
    ]

    size: number

    private cards: ICards

    constructor(complexity: IComplexity){
        this.size = complexity == IComplexity.EASY
            ? 4
            : 6
        const fieldSize = this.size * this.size / 2

        let cards;

        switch (complexity) {
            case 'EASY':
                cards = this.constColorPicker(fieldSize)
                break;
            case 'NORMAL':
                cards = this.constColorPicker(fieldSize)
                break;
            case 'HARD':
                cards = getNewArray(fieldSize).map(i => this.constColorPicker(4).flat())
                break;
            case 'INSANE':
                cards = getNewArray(fieldSize).map(i => this.fullRandomColorPicker(4))
                break;
        }

        cards = cards.map((i, index) => ({
                    name: createHmac('sha256','').update(i.join()).digest('hex') ,
                    colors: i,
                    show: false,
                    index: 0
                }))

        this.cards = this.mixCards([...copy(cards), ...copy(cards)])
    }

    get getCards() {
        return this.cards
    }

    /**
     * @description возвращает массив цветов из сонктант
     */
    private fullRandomColorPicker(x: number) {
        return getNewArray(x).map(() => `rgb(${this.rand(255)}, ${this.rand(255)}, ${this.rand(255)})`)
    }

    /**
     * @description возвращает массив случайных цветов
     */
    private constColorPicker(x: number) {
        const copy = [...this.cardConst]
        return getNewArray(x).map(() => copy.splice(this.rand(copy.length - 1), 1))
    }

    /**
     * @description возвращает случайное целое число в заданном диапазоне (min = 0)
     */
    private rand(max: number, min = 0) {
        return Math.round(Math.random() * (max - 0) + 0)
    }

    /**
     * @description перемешивает карты
     */
    private mixCards(cards: ICards): ICards {
        return getNewArray(cards.length)
            .map((i, index) => {
                const card = cards.splice(this.rand(cards.length - 1), 1)[0]
                card.index = index
                return card
            })
    }
}