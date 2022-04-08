class Platform {
  constructor() {
    this.x = 30
    this.y = 660
    this.height = 30
    this.width = 300
    this.color = color(51)
  }

  drawPlatform() {
    fill(this.color)
    rect(this.x, this.y, this.width, this.height)
  }
}