import { Snake, Python, Anakonda, Cobra } from './snake.js'
import { Food, Syntax_Bug, Strange_Bug, Pokemon } from './food.js'
import { outsideGrid } from './grid.js';
import { Settings } from './settings.js';


let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('gameboard')
const settings = new Settings();
const snake = new Snake(settings);
const food = new Food(settings, snake);


function initGame(currentTime)
{
    if (gameOver)
    {
        if (confirm('You lost. Press ok to restart.'))
        {
            window.location = '/'
        }
    }

    // Your game can start here, but define separate functions, don't write everything in here :)

    window.requestAnimationFrame(initGame);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    
    // throttler; if update time haven't passed, don't update snake position
    if (secondsSinceLastRender < 1 / settings.SNAKESPEED) return
    
    lastRenderTime = currentTime

    update();
    draw();
}

window.requestAnimationFrame(initGame)

function update()
{
    // move snake to new coordinates
    snake.update()
    
    // updateSnake()
    checkDeath()
    food.update(snake)
}

function draw()
{
    // clear view
    gameBoard.innerHTML = ''
    // render in browser
    snake.draw(gameBoard)
    food.draw(gameBoard)
  }
  
function checkDeath() 
{
    gameOver = outsideGrid(snake.SnakeHead || snake.snakeIntersection())
}

