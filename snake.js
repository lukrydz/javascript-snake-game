import { getDirection } from "./keyboardinput.js"

// moves per second:
export var SNAKESPEED = 2
// array of x, y positions
const snakeBody = [
    { x: 8, y: 8 }
]

let newSnakeSegments = 0

export function update() {
    addSegments()

    const inputDirection = getDirection();

    for (let i = snakeBody.length - 2; i>= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
        // ... makes a duplicate of a snakeBody object
    }

        snakeBody[0].x += inputDirection.x
        snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
// draws snake elements

    console.log('draw')
    // "funkcja strzalkowa!"
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSnakeSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
      if (ignoreHead && index === 0) return false
      return equalPositions(segment, position)
    })
  }


export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(position1, position2) {
    return position1.x === position2.x && position1.y === position2.y
}

function addSegments() {
    for (let i = 0; i < newSnakeSegments; i++) {
        // adds new element at the end of snake
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }
    newSnakeSegments = 0

}
