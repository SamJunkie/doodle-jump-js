class Player {
  #PLAYER_WIDTH = 30    //Ширина игрока
  #PLAYER_HEIGHT = 90   //Длина игрока
  #DELTATIME = 500      //Надо подбирать это число
  #MAX_X_SPEED = 30     //Максимальная скорость по оси X
  #g = 9      //Гравитация (Y)
  #shift = 0  //Смещение игрока по X
  #pov = 1    //Наплавление взгляда
  dx = 0      //Скорость  x
  dy = 0      //          y
  ax = 0      //Ускорение x
  ay = 0      //          y


  constructor() {
    this.x = WIDTH / 2 - this.#PLAYER_WIDTH / 2
    //this.y = HEIGHT / 2 - this.#PLAYER_HEIGHT / 2
    this.y = 10
    //this.color = color('green')
    this.ay = this.#g
    this.ax = this.#shift
    this.shifting = false
  }

  //двинуть игрока
  movePlayer() {
    this.dx += this.ax * (deltaTime / this.#DELTATIME)
    this.dy += this.ay * (deltaTime / this.#DELTATIME)

    if ((this.shifting) && (this.dx > this.#MAX_X_SPEED)) {
      this.dx = this.#MAX_X_SPEED
    }
    if ((this.shifting) && (this.dx < -this.#MAX_X_SPEED)) {
      this.dx = -this.#MAX_X_SPEED
    }
    if ((!this.shifting) && (this.dx > 0) && (this.ax > 0)) {
      this.dx = 0
      this.ax = 0
    }
    if ((!this.shifting) && (this.dx < 0) && (this.ax < 0)) {
      this.dx = 0
      this.ax = 0
    }
    
    if (this.x + this.#PLAYER_WIDTH < 0) {
      this.x = WIDTH
    }
    if (this.x > WIDTH) {
      this.x = -this.#PLAYER_WIDTH
    }

    this.x += this.dx
    this.y += this.dy
  }

  //проверить игрока на коллизии
  collisionPlayer() {
    //Y
    if (this.dy < 0) {
      //коллизии на бонусы и врагов
    }
    if (this.dy >= 0) {
      //коллизии на платформы
      //работают только когда игрок падает
      platforms.forEach(item => {
        if (this.collisionRect(item)) {
          this.dy = (this.#g * (deltaTime / this.#DELTATIME) + this.dy) * -1
        }
      })

      //колизии на врагов и бонусы
    }
  }

  //Проверить на коллизии любой прямоугольник
  collisionRect(rect) {
    //Возможно не все учел, надо тестировать
    if ((this.y + this.#PLAYER_HEIGHT >= rect.y) && (this.y < HEIGHT)) {
      if ((this.x - this.#PLAYER_WIDTH >= rect.x) && (this.x + this.#PLAYER_WIDTH <= rect.x + rect.width)) {
        return true
      }
      if ((this.x <= rect.x + rect.width) && (this.x + this.#PLAYER_WIDTH >= rect.x)) {
        return true
      }
      return false
    }

    return false
  }

  shiftPlayer(way) {
    this.shifting = true
    switch (way) {
      case LEFT_ARROW:
        this.ax = -this.#g
        this.#pov = -1
        break
      case RIGHT_ARROW:
        this.ax = this.#g
        this.#pov = 1
        break
    }
  }

  unshiftPlayer(way) {
    this.shifting = false
    switch (way) {
      case LEFT_ARROW:
        this.ax = this.#g
        break
      case RIGHT_ARROW:
        this.ax = -this.#g
        break
    }
  }

  //Нарисовать игрока
  drawPlayer() {
    fill('green')
    rect(this.x, this.y, this.#PLAYER_WIDTH, this.#PLAYER_HEIGHT)
    fill('red')
    rect(this.x + (this.#pov * (this.#PLAYER_WIDTH / 2)), this.y + 15, this.#PLAYER_WIDTH, 5)
  }
}