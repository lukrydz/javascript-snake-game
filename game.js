import { Snake, Python, Anakonda, Cobra, roundScore } from './snake.js'
import { Food, Syntax_Bug, Strange_Bug, Pokemon } from './food.js'
import { outsideGrid } from './grid.js';
import { Settings } from './settings.js';
import { Player } from './player.js';
import { storeScore, getScores } from './cookiehiscore.js';

let lastRenderTime = 0
let gameOver = false
///tutaj masz level wybrany przez gracza
let level = ''
/// tutaj masz hero wybranego przez gracza
let hero =''
const gameBoard = document.getElementById('gameboard')
const player = new Player();
const settings = new Settings();
const snake = new Snake(settings);
const food = new Food(settings, snake);




document.querySelector('#name_page > #buttons4 > #choice').addEventListener('click', getName)
function getName() {
    player.update_player_data(document.getElementById("name_input").value)
      
}

document.querySelector('#levelofdifficulty > #buttons1 > #choice1').addEventListener('click', getLevelEasy)
function getLevelEasy() {
    level = document.getElementById("choice1").textContent
    document.querySelector('#herotochoose2 > #getnamefromjs').innerHTML = player.name + ', please choose your hero dude'
}

document.querySelector('#levelofdifficulty > #buttons2 > #choice2').addEventListener('click', getLevelHard)
function getLevelHard() {
    level = document.getElementById("choice2").textContent
    document.querySelector('#herotochoose2 > #getnamefromjs').innerHTML = player.name + ', please choose your hero dude'
}

document.querySelector('#herotochoose > #herosscreen > #cobra').addEventListener('click', getCobra)
function getCobra() {
    hero = document.getElementById("cobra").id
}

document.querySelector('#herotochoose > #herosscreen > #python').addEventListener('click', getPython)
function getPython() {
    hero = document.getElementById("python").id
}

document.querySelector('#herotochoose > #herosscreen > #viper').addEventListener('click', getViper)
function getViper() {
    hero = document.getElementById("viper").id
}


document.querySelector('#name_page > #buttons4 > #choice').addEventListener('click', myName)
function myName() {
    document.querySelector('#levelofdifficulty2 > #getnamefromjs').innerHTML = player.name + ', please choose your level of difficulty bro'

}
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
    showCurrentScore()
  }
  
function checkDeath() 
{
    gameOver = outsideGrid(snake.SnakeHead || snake.snakeIntersection())
}

function showCurrentScore(){
    document.querySelector("#score").innerHTML = `Score: ${roundScore}`
    document.querySelector('.snake').style.backgroundImage = 'url("snake.png")';    
}

document.querySelector('#container > #buttons3 > #choice').addEventListener('click', hallOfFame)

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

 
    document.querySelector('#halloffame2 > #buttons1 > #choice').innerHTML = `1. ${scoreArray[0]}`
    document.querySelector('#halloffame2 > #buttons2 > #choice').innerHTML = `2. ${scoreArray[1]}`
    document.querySelector('#halloffame2 > #buttons3 > #choice').innerHTML = `3. ${scoreArray[2]}`
}

// document.querySelector('.snake').style.backgroundImage = 'url("jajko2.png")';