var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;
    this.score = "";
    this.P1res = "";
    this.P2res = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.setLeadOverZero = function(pointX, resX, resY) {
  if (pointX === 1) {
    resX = "Fifteen";
  }
  if (pointX === 2) {
    resX = "Thirty";
  }
  if (pointX === 3) {
    resX = "Forty";
  }
  resY = "Love";
  this.score = resX + "-" + resY;
}

TennisGame2.prototype.getScore = function() {

    if (this.P1point === this.P2point && this.P1point < 5) {
        if (this.P1point === 0)
            score = "Love-All";
        else if (this.P1point === 1) {
          score = "Fifteen-All";
        }
        else if (this.P1point === 2) {
          score = "Thirty-All";
        }
        else if (this.P1point > 2) {
            score = "Deuce";
        }
    }

    if (this.P1point > 0 && this.P2point === 0) {
      this.setLeadOverZero(this.P1point, this.P1res, this.P2res)
    }
    if (this.P2point > 0 && this.P1point === 0) {
      this.setLeadOverZero(this.P2point, this.P2res, this.P1res)
    }

    if (this.P1point > this.P2point && this.P1point < 4) {
        if (this.P1point === 2)
            this.P1res = "Thirty";
        if (this.P1point === 3)
            this.P1res = "Forty";
        if (this.P2point === 1)
            this.P2res = "Fifteen";
        if (this.P2point === 2)
            this.P2res = "Thirty";
        this.score = this.P1res + "-" + this.P2res;
    }
    if (this.P2point > this.P1point && this.P2point < 4) {
        if (this.P2point === 2)
            this.P2res = "Thirty";
        if (this.P2point === 3)
            this.P2res = "Forty";
        if (this.P1point === 1)
            this.P1res = "Fifteen";
        if (this.P1point === 2)
            this.P1res = "Thirty";
        this.score = this.P1res + "-" + this.P2res;
    }

    if (this.P1point > this.P2point && this.P2point >= 3) {
        this.score = "Advantage player1";
    }

    if (this.P2point > this.P1point && this.P1point >= 3) {
        this.score = "Advantage player2";
    }

    if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
        this.score = "Win for player1";
    }
    if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
        this.score = "Win for player2";
    }
    return this.score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.P1point++;
};

TennisGame2.prototype.P2Score = function() {
    this.P2point++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
