'use strict';

var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.score = "";
    this.tempScore = 0;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1") {
        this.m_score1 += 1;
    }
    else {
        this.m_score2 += 1;
    }
};

TennisGame1.prototype.getEqualScore = function() {
    switch (this.m_score1) {
            case 0:
                this.score = "Love-All";
                break;
            case 1:
                this.score = "Fifteen-All";
                break;
            case 2:
                this.score = "Thirty-All";
                break;
            default:
                this.score = "Deuce";
                break;
        }
};

TennisGame1.prototype.AdvantageOrWin = function() {
  let minusResult = this.m_score1 - this.m_score2;
  if (minusResult === 1) this.score = "Advantage player1";
  else if (minusResult === -1) this.score = "Advantage player2";
  else if (minusResult >= 2) this.score = "Win for player1";
  else this.score = "Win for player2";
}

TennisGame1.prototype.getScore = function() {
    if (this.m_score1 === this.m_score2) {
        this.getEqualScore();
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        this.AdvantageOrWin();
    } else {
        for (let i = 1; i < 3; i++) {
            if (i === 1) this.tempScore = this.m_score1;
            else {
                this.score += "-";
                this.tempScore = this.m_score2;
            }
            switch (this.tempScore) {
                case 0:
                    this.score += "Love";
                    break;
                case 1:
                    this.score += "Fifteen";
                    break;
                case 2:
                    this.score += "Thirty";
                    break;
                case 3:
                    this.score += "Forty";
                    break;
            }
        }
    }
    return this.score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
