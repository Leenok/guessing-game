class GuessingGame {
    constructor() {
        this.max = null;
        this.min = null;
        this.r = null;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.r = Math.round(this.max+ this.min/2);
        //if(this.r <number){return this.greater()}
        //if(this.r >number){ return this.lower()};
        //if(this.r === number) {return this.r };
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
