import { update as updateSnake, draw as drawSnake, SNAKESPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js';


let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('gameboard')

function initGame(currentTime) {

    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/'
        }}

    // Your game can start here, but define separate functions, don't write everything in here :)

    window.requestAnimationFrame(initGame);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    
    // throttler; if update time haven't passed, don't update snake position
    if (secondsSinceLastRender < 1 / SNAKESPEED) return
    
    lastRenderTime = currentTime

    update();

    draw();
    
}

window.requestAnimationFrame(initGame)

function update(){
    // move snake to new coordinates
    updateSnake()
    checkDeath()
    updateFood()
}

function draw(){
    // clear view
    gameBoard.innerHTML = ''
    // render in browser
    drawSnake(gameBoard)
    drawFood(gameBoard)
  }
  
function checkDeath() {
gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}