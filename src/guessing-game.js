class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.r = Math.round((this.max+ this.min)/2);
        return this.r;
    }

    lower() {
        this.max = this.r ;
    }

    greater() {
         this.min = this.r ;
    }
}

module.exports = GuessingGame;
