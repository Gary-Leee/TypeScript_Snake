export class Food {
    element: HTMLElement;
    constructor() {
        // this.element = document.getElementById('food') as HTMLElement;
        this.element = <HTMLElement>document.getElementById('food');
    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    changePostion() {
        //食物的位置X方向0~父元素.width-food.width/2
        //食物的位置Y方向0~父元素.height-food.height/2
        // this.element.style.left = '80px'
        // this.element.style.top = '80px'
        const parentNode = <HTMLElement>this.element.offsetParent;
        const left = getRandomInteger(0, parentNode.clientWidth - this.element.clientWidth, this.element.clientWidth);
        const top = getRandomInteger(0, parentNode.clientHeight - this.element.clientHeight, this.element.clientWidth);
        // console.log(parentNode.offsetWidth, parentNode.offsetHeight);
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }

}
function getRandomInteger(a: number, b: number, step: number): number {
    // 确保 a 小于等于 b
    if (a > b) {
        [a, b] = [b, a];
    }

    // 计算 a 到 b 之间的随机整数
    const randomInteger = Math.floor(Math.random() * (b - a + 1) / step) * step

    return randomInteger;
}