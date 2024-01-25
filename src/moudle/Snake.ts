export default class Snake {
    container: HTMLElement;
    snakeHead: HTMLElement;
    bodies: HTMLCollection;

    constructor() {
        this.container = <HTMLElement>document.getElementById('snake');
        this.snakeHead = <HTMLElement>document.querySelector('#snake > div');
        // document.querySelectorAll();
        this.bodies = <HTMLCollection>this.container.getElementsByTagName('div')
    }
    addBody() {
        this.container.insertAdjacentHTML('beforeend', '<div></div>');
        // let ele = document.createElement('div');
        // this.container.appendChild(ele);
    }
    get X() {
        return this.snakeHead.offsetLeft;
    }
    set X(val: number) {
        if (this.X == val) return;
        if (val < 0 || val > document.getElementById('stage')!.clientWidth)
            throw new Error('游戏结束了');
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val) {
            // console.log('水平方向发生了掉头');
            // 如果发生了掉头，让蛇向反方向继续移动
            if (val > this.X) {
                // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                val = this.X - 10;
            } else {
                // 向左走
                val = this.X + 10;
            }
        }
        this.moveBody();
        this.snakeHead.style.left = val + 'px'
        this.checkHeadBody();
        // console.log(val);
    }
    get Y() {
        return this.snakeHead.offsetTop;
    }
    set Y(val: number) {
        if (this.Y == val) return;
        if (val < 0 || val > document.getElementById('stage')!.clientHeight)
            throw new Error('游戏结束了');
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val) {
            if (val > this.Y) {
                val = this.Y - 10;
            } else {
                val = this.Y + 10;
            }
        }
        this.moveBody();
        this.snakeHead.style.top = val + 'px'
        this.checkHeadBody();
        // console.log(val);
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';

        }
    }
    checkHeadBody() {
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('撞到自己了！');
            }
        }
    }
}