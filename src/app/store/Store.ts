import { getNewArray } from './../utils/index';
import { IComplexity, ICards } from './interface';
import { makeAutoObservable } from "mobx";
import { NewCards } from "./cardCreate";

class store {
  private cardsClass: NewCards
  cards: ICards = []
  cardInHand: ICards = []
  menuOpen: boolean = true

  constructor() {
    makeAutoObservable(this)
  }

  init(Complexity: IComplexity){
    this.cardsClass = new NewCards(Complexity)
    this.cards = this.cardsClass.getCards
    this.menuOpen = false
  }

  get getCards(){
    return this.cards
  }

  getCardsIndexes(): number[][] {
    return getNewArray(this.cardsClass.size).map((i, iIndex) =>
      getNewArray(this.cardsClass.size).map((ii, iiIndex) =>
        this.cards[(iIndex * this.cardsClass.size) + iiIndex].index
      )
    )
  }

  showCard(index: number) {
    if(this.cardInHand.length === 2) return

    this.cardInHand.push(this.cards[index])
    this.cards[index].show = true

    if(this.cardInHand.length === 2) setTimeout(this.closeCard.bind(this), 1000)
  }

  closeCard(){
    if(this.cardInHand[0].name !== this.cardInHand[1].name) {
      this.cards[this.cardInHand[0].index].show = false
      this.cards[this.cardInHand[1].index].show = false
    }
    this.cardInHand = []
  }
}

export const Store = new store()
