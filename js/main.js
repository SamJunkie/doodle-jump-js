const WIDTH = 360
const HEIGHT = 720
let platforms = []
let player
let gamePoints = 0

//Инициализация
function setup() {
  createCanvas(WIDTH, HEIGHT)
  //
  platforms.push(new Platform())
  player = new Player()
}

//Игровой цикл
function draw() {
  //Фон
  background(220)

  //Обработка платформ
  platforms.forEach(item => {
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
    background(0)
    textSize(28)
    fill('red')
    textAlign(CENTER, CENTER)
    text('Game Over', WIDTH / 2, HEIGHT / 2)

    textSize(24)
    fill('white')
    textAlign(CENTER, CENTER)
    const points = 'Game  points: ' + gamePoints
    text(points, WIDTH / 2, HEIGHT / 2 + 48)
    noLoop()
  }
}

function isGameOver() {
  if (player.y > HEIGHT) {
    return true
  }
  return false
}

function keyPressed() {
  if ((keyCode === LEFT_ARROW) || (keyCode === RIGHT_ARROW)) {
    player.shiftPlayer(keyCode)
  }
}

function keyReleased() {
  if ((keyCode === LEFT_ARROW) || (keyCode === RIGHT_ARROW)) {
    player.unshiftPlayer(keyCode)
  }
}