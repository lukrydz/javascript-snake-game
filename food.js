import { randomGridPosition } from './grid.js'


export class Food
{
    constructor(settings, snake)
    {
        this.position = this.getRandomFoodPosition(snake);
        this.SNAKE_ELEMENTS_TO_ADD = settings.SNAKE_ELEMENTS_TO_ADD;
    }


    update(snake)
    {
        if (snake.onSnake(this.position))
        {
            new Audio('/chrupanie.mp3').play()
            snake.expandSnake(this.SNAKE_ELEMENTS_TO_ADD)
            this.position = this.getRandomFoodPosition(snake)
        }
    }


    draw(gameBoard)
    {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = this.position.y
        foodElement.style.gridColumnStart = this.position.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    }


    getRandomFoodPosition(snake)
    {
        let newFoodPosition
        while (newFoodPosition == null || snake.onSnake(newFoodPosition))
        {
            newFoodPosition = randomGridPosition()
        }
        return newFoodPosition
    }


}


export class Syntax_Bug extends Food
{
    constructor(settings, snake, name)
    {
        super(name);
        this.name = name;
    }

}

export class Strange_Bug extends Food
{
    constructor(settings, snake, name)
    {
        super(name);
        this.name = name;
    }

}

export class Pokemon extends Food
{
    constructor(settings, snake, name)
    {
        super(name);
        this.name = name;
    }

}