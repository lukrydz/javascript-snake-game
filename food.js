import { randomGridPosition } from './grid.js'


export class Food
{
    constructor(snake)
    {
        this.position = { x: 6, y: 5 }
        this.getRandomFoodPosition(snake);
        this.image = 'food'
        this.element = document.createElement('div')
    }


    update(snake)
    {
        if (snake.onSnake(this.position))
        {
            snake.expandSnake()
            this.getRandomFoodPosition(snake)
        }
    }

    kill()
    {
        this.element.remove()
    }


    draw(gameBoard)
    {   
        this.element.style.gridRowStart = this.position.y
        this.element.style.gridColumnStart = this.position.x
        this.element.classList.add(this.image)
        gameBoard.appendChild(this.element)
    }


    getRandomFoodPosition(snake)
    {
        while (this.position == null || snake.onSnake(this.position))
        {
            this.position = randomGridPosition()
        }
    }


}


export class Syntax_Bug extends Food
{
    constructor(snake)
    {
        super(snake);
        this.name = name;
        this.image = 'strange_bug';
    }

}

export class Strange_Bug extends Food
{
    constructor(snake)
    {
        super(snake);
        this.name = name;
        this.image = 'syntax_bug';
    }

}

export class Pokemon extends Food
{
    constructor(snake)
    {
        super(snake);
        this.name = name;
        this.image = 'pokemon';
    }

}