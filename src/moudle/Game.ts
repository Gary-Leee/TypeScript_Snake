import Snake from "./Snake";
import { Food } from "./Food";
import ScorePanel from "./scorePanel";
let allDirection = []
export default class Game {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction = 'ArrowRight';
    isAlive = true;
    constructor() {
        this.snake = new Snake;
        this.food = new Food;
        this.scorePanel = new ScorePanel(10, 2);
        this.init();
    }
    init() {
        document.addEventListener('keydown', this.handleKey.bind(this))
        this.food.changePostion();
        this.move();

    }
    handleKey(event: KeyboardEvent) {
        // console.log(event);
        this.direction = event.key
        // this.move();
    }
    move() {
        let X = this.snake.X;
        let Y = this.snake.Y
        const step: number = 10;
        switch (this.direction) {
            case 'ArrowUp':
                Y -= step;
                break;
            case 'ArrowDown':
                Y += step;
                break;
            case 'ArrowLeft':
                X -= step;
                break;
            case 'ArrowRight':
                X += step;
                break;
            default:
                break;
        }
        // console.log(X);
        // console.log(Y);
        this.isEat(X, Y);
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert((e as Error).message + ' GAME OVER!');
            // 将isLive设置为false
            this.isAlive = false
        }

        console.log((this.scorePanel.level + 1) * step)
        this.isAlive && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level + 1) * 10);
    }

    isEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.scorePanel.addScore()
            this.food.changePostion();
            this.snake.addBody();
        }
    }

}