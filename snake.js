// moves per second:
export const SNAKESPEED = 2
// array of x, y positions
const snakeBody = [
    { x: 11, y: 11 },
    { x: 12, y: 11 },
    { x: 13, y: 11 }
]

export function update() {
    for (let i = snakeBody.length - 2; i>= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
        // this ... makes a duplicate of a snakeBody object

        // snakeBody[0].x += 1
        // snakeBody[0].y += 0
    }
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

