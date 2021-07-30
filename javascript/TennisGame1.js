class TennisGame1 {
    constructor(player1Name, player2Name) {
        this.player1Score = 0;
        this.player2Score = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    };

    wonPoint(playerName) {
        if (playerName === this.player1Name) {
            this.player1Score += 1;
        } else {
            this.player2Score += 1;
        }
    };

    getScore() {
        const isGameInTie = this.player1Score === this.player2Score;
        if (isGameInTie) {
            if (this.player1Score > 2) {
                return "Deuce";
            }
            return`${pointsToString(this.player1Score)}-All`;
        }

        if (this.player1Score >= 4 || this.player2Score >= 4) {
            const minusResult = this.player1Score - this.player2Score;
            const player = minusResult > 0 ? this.player1Name : this.player2Name;
            const result = Math.abs(minusResult) === 1 ? 'Advantage' : "Win for";

            return `${result} ${player}`;
        }

        return `${pointsToString(this.player1Score)}-${pointsToString(this.player2Score)}`;
    };
}

function pointsToString(tempScore) {
    switch (tempScore) {
        case 0:
            return "Love";
        case 1:
            return "Fifteen";
        case 2:
            return "Thirty";
        default:
            return "Forty";
    }
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}