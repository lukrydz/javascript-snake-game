import { getDirection } from "./keyboardinput.js"

export let roundScore = 0;

export class Snake 
{
    constructor(settings)
    {
        // array of x, y positions
        this.snakeBody = [ { x: 10, y: 11 } ]
        this.newSnakeSegments = 0
        this.SnakeHead = this.snakeBody[0]
        this.SNAKE_ELEMENTS_TO_ADD = settings.SNAKE_ELEMENTS_TO_ADD
        this.image = ''
        this.SNAKESPEED = 1
    }


    update()
    {
        this.addSegments()

        const inputDirection = getDirection();

        for (let i = this.snakeBody.length - 2; i>= 0; i--)
        {
            this.snakeBody[i + 1] = { ...this.snakeBody[i] }
            // ... makes a duplicate of a snakeBody object
        }

            this.snakeBody[0].x += inputDirection.x
            this.snakeBody[0].y += inputDirection.y
    }


    draw(gameBoard)
    {
    // draws snake elements

        console.log('draw')
        // "funkcja strzalkowa!"
        this.snakeBody.forEach(segment =>{
            const snakeElement = document.createElement('div')
            snakeElement.style.gridRowStart = segment.y
            snakeElement.style.gridColumnStart = segment.x
            snakeElement.classList.add(this.image)
            gameBoard.appendChild(snakeElement)
        })
    }


    expandSnake()
    {
        this.newSnakeSegments += this.SNAKE_ELEMENTS_TO_ADD
    }


    onSnake(position, { ignoreHead = false } = {})
    {
        return this.snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return this.equalPositions(segment, position)
        })
    }


    snakeIntersection()
    {
        return onSnake(this.snakeBody[0], { ignoreHead: true })
    }

    ////////////////////////////////////////////////////


    equalPositions(position1, position2)
    {
        return position1.x === position2.x && position1.y === position2.y
    }


    addSegments()
    {
        for (let i = 0; i < this.newSnakeSegments; i++)
        {
            // adds new element at the end of snake
            this.snakeBody.push({ ...this.snakeBody[this.snakeBodylength - 1]})
        }
        roundScore = roundScore + this.newSnakeSegments
        this.newSnakeSegments = 0
    }


}


export class Python extends Snake
{
    constructor(settings, name)
    {
        super(name);
        this.type = "Python"
        this.name = name;
        this.image = "python"
        this.SNAKESPEED = 2
    }

}


export class Viper extends Snake
{
    constructor(settings, name)
    {
        super(name);
        this.type = "Viper"
        this.name = name;
        this.image = "viper"
        this.SNAKESPEED = 6
    }

}


export class Cobra extends Snake
{
    constructor(settings, name)
    {
        super(name);
        this.type = "Cobra"
        this.name = name;
        this.image = "cobra"
        this.SNAKESPEED = 2
    }

}