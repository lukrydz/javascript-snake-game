import { Snake, Python, Viper, Cobra, roundScore } from './snake.js'
import { Food, Syntax_Bug, Strange_Bug, Pokemon } from './food.js'
import { outsideGrid } from './grid.js';
import { Settings } from './settings.js';
import { Player } from './player.js';
import { storeScore, getScores } from './cookiehiscore.js';

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('gameboard')
const player = new Player();
const settings = new Settings();
const snake = new Cobra(settings, "Tadeusz");
const food = new Food(settings, snake);


player.update_player_data(prompt("Please enter your name: "))


function initGame(currentTime)
{
    if (gameOver)
    {
        storeScore(player.name, roundScore)

        if (confirm('You lost. Press ok to restart.'))
        {

            window.location.reload(true);
        }
    }

    // Your game can start here, but define separate functions, don't write everything in here :)

    window.requestAnimationFrame(initGame);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    
    // throttler; if update time haven't passed, don't update snake position
    if (secondsSinceLastRender < 1 / snake.SNAKESPEED) return
    
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
    showCurrentScore()
  }
  
function checkDeath() 
{
    gameOver = outsideGrid(snake.SnakeHead || snake.snakeIntersection())
}

function showCurrentScore(){
    document.querySelector("#score").innerHTML = `Score: ${roundScore}`
}

document.querySelector('#container > #kafelki3 > #choice').addEventListener('click', hallOfFame)

function hallOfFame(){
    let scores = getScores()
    let scoreArray = []

    function sort_object(obj) {
        let items = Object.keys(obj).map(function(key) {
            return [key, obj[key]];
        });
        items.sort(function(first, second) {
            return second[1] - first[1];
        });
        let sorted_obj={}
        $.each(items, function(k, v) {
            let use_key = v[0]
            let use_value = v[1]
            sorted_obj[use_key] = use_value
        })
        return(sorted_obj)
    }

    scores = sort_object(scores)

    for (let player in scores) {
        scoreArray.push(`${player} - ${scores[player]}`)

    }

 
    document.querySelector('#halloffame2 > #kafelki1 > #choice').innerHTML = `1. ${scoreArray[0]}`
    document.querySelector('#halloffame2 > #kafelki2 > #choice').innerHTML = `2. ${scoreArray[1]}`
    document.querySelector('#halloffame2 > #kafelki3 > #choice').innerHTML = `3. ${scoreArray[2]}`
}
