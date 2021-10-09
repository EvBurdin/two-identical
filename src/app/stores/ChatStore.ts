import { makeAutoObservable } from "mobx";

class store {

  constructor() {
    makeAutoObservable(this)
  }
}

export const Store = new store()
