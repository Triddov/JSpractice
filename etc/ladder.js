const ladder = {
    step: 0,
    up(){ this.step++; return this},
    down() { this.step--; return this },
    show() { console.log(`now step is ${this.step}`); return this }
}

ladder.up().up().up().down().show()
