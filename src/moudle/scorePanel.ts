export default class ScorePanel {
    private score: number = 0;
    level: number = 0;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel: number;
    upgradeScore: number;
    constructor(maxLevel: number = 10, upgradeScore = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upgradeScore = upgradeScore;
    }
    changeScore(val: number): void {
        this.score = val;
        this.scoreEle.innerHTML = this.score.toString();
        if (this.score % this.upgradeScore == 0) this.levelUp();
    }
    addScore(): void {
        this.score += 1;
        this.scoreEle.innerHTML = this.score.toString();
        if (this.score % this.upgradeScore == 0) this.levelUp();
    }
    levelUp(): void {
        // this.level = 10 >= this.level ? val : this.level;
        // this.levelEle.innerHTML = this.level.toString();
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEle.innerHTML = this.level.toString();
        }
    }
}