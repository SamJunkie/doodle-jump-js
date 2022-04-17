import {WIDTH, HEIGHT} from "./constants"
import p5 from 'p5'
import {Player} from "./player"
import {Platform} from "./platform"
import {Bonus} from "./bonus"
import {Enemy} from "./enemy.js"



let player = null
let gamePoints = null

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(WIDTH, HEIGHT)
    Platform.platforms.push(new Platform())
    player = new Player()
  }
  p.draw = () => {
    //Фон
    p.background(220)

    //Обработка платформ
    Platform.platforms.forEach(item => {
      item.drawPlatform()
    })

    //Обработка игрока
    player.movePlayer()
    player.collisionPlayer()
    player.drawPlayer()

    //Обработка бонусов
    //

    //Обработка врагов
    //

    //Обработка игрового цикла
    if (isGameOver()) {
      p.background(0)
      p.textSize(28)
      p.fill('red')
      p.textAlign(p.CENTER, p.CENTER)
      p.text('Game Over', WIDTH / 2, HEIGHT / 2)

      p.textSize(24)
      p.fill('white')
      p.textAlign(p.CENTER, p.CENTER)
      const points = 'Game  points: ' + gamePoints
      p.text(points, WIDTH / 2, HEIGHT / 2 + 48)
      p.noLoop()
    }

    p.keyPressed = () => {
      if ((p.keyCode === p.LEFT_ARROW) || (p.keyCode === p.RIGHT_ARROW)) {
        player.shiftPlayer(p.keyCode)
      }
    }

    p.keyReleased = () => {
      if ((p.keyCode === p.LEFT_ARROW) || (p.keyCode === p.RIGHT_ARROW)) {
        player.unshiftPlayer(p.keyCode)
      }

    }
  }
}

function isGameOver() {
  if (player.y > HEIGHT) {
    return true
  }
  return false
}

export const myp5 = new p5(sketch)