import Grumpy from "grumpy"

declare interface Groupwear {
  getItem(key: any): any
  setItem(key: any, value: any, time?: number): any
  hasItem(key: any): any
}

abstract class GroupAbstract implements Groupwear {
  getItem (_key: any) {
    throw new Error("Method not implemented.")
  }

  setItem (_key: any, _value: any, _time?: number) {
    throw new Error("Method not implemented.")
  }

  hasItem (_key: any) {
    throw new Error("Method not implemented.")
  }
}

export class Group implements GroupAbstract {
  private grumpy: Grumpy = null

  constructor () {
    this.grumpy = new Grumpy()
  }

  // Build Methods
  public getItem (key: any) {
    return this.grumpy.get(key)
  }

  public setItem (key: any, value: any, time?: number) {
    this.grumpy.set(key, value, time)
    return this
  }

  public hasItem (key: any) {
    return this.grumpy.has(key)
  }
}
