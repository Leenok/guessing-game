class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
        this.r = 0;
    }

    guess() {
        this.r = Math.round(this.max+ this.min/2);
        if(this.r <number){return this.greater()}
        if(this.r >number){ return this.lower()};
        if(this.r === number) {return this.r };
    }

    lower() {
        this.max = this.r ;
    }

    greater() {
         this.min = this.r ;
    }
}

module.exports = GuessingGame;
