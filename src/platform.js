import {myp5} from './main'

export class Platform {

  static platforms = []

  constructor() {
    this.x = 30
    this.y = 660
    this.height = 30
    this.width = 300
    this.color = myp5.color(51)
  }

  drawPlatform() {
    myp5.fill(this.color)
    myp5.rect(this.x, this.y, this.width, this.height)
  }
}