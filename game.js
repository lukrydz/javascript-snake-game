import { update as updateSnake, draw as drawSnake, SNAKESPEED } from './snake.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('gameboard')

function initGame(currentTime) {

    // Your game can start here, but define separate functions, don't write everything in here :)

    window.requestAnimationFrame(initGame);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    
    // throttler; if update time haven't passed, don't update snake position
    if (secondsSinceLastRender < 1 / SNAKESPEED) return
    
    lastRenderTime = currentTime

    console.log('Rendergame')
    
    // move snake to new coordinates
    updateSnake()
    // clear view
    gameBoard.innerHTML = ''
    // render in browser
    drawSnake(gameBoard)
    
    
}

window.requestAnimationFrame(initGame)
