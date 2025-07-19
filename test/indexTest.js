describe('Basketball Stats', function () {
  
  describe('numPointsScored', function () {
    it('should return points scored by a player', function () {
      expect(numPointsScored('Alan Anderson')).to.equal(22);
      expect(numPointsScored('Ben Gordon')).to.equal(33);
    });
    it('should return an error message if wrong player name or empty string', function () {
      expect(numPointsScored('wrong player name')).to.equal("Error: You've entered an incorrect player name. Please try again");
      expect(numPointsScored('')).to.equal("Error: You've entered an incorrect player name. Please try again");
      expect(numPointsScored()).to.equal("Error: You've entered an incorrect player name. Please try again");
    });
  });

  describe('shoeSize', function () {
    it('should return shoe size of a player', function () {
      expect(shoeSize('Alan Anderson')).to.equal(16);
      expect(shoeSize('Ben Gordon')).to.equal(15);
    });
    it('should return an error message if wrong player name or empty string', function () {
      expect(numPointsScored('wrong player name')).to.equal("Error: You've entered an incorrect player name. Please try again");
      expect(numPointsScored('')).to.equal("Error: You've entered an incorrect player name. Please try again");
      expect(numPointsScored()).to.equal("Error: You've entered an incorrect player name. Please try again");
    });
  });
  
  describe('teamColors', function () {
    it('should return team colors', function () {
      expect(teamColors('Brooklyn Nets')).to.deep.equal(['Black', 'White']);
      expect(teamColors('Charlotte Hornets')).to.deep.equal(['Turquoise', 'Purple']);
    });
    it('should return an error message if wrong team name or empty string', function () {
      expect(teamColors('wrong team name')).to.deep.equal("Error: You've entered an incorrect team name. Please try again");
      expect(teamColors('')).to.deep.equal("Error: You've entered an incorrect team name. Please try again");
      expect(teamColors()).to.deep.equal("Error: You've entered an incorrect team name. Please try again");
    });
  });
  
  describe('teamNames', function () {
    it('should return team names', function () {
      expect(teamNames()).to.deep.equal(['Brooklyn Nets', 'Charlotte Hornets']);
    });
  });

  describe('playerNumbers', function () {
    it('should return player numbers of a team', function () {
      expect(playerNumbers('Brooklyn Nets')).to.deep.equal([0, 30, 11, 1, 31]);
      expect(playerNumbers('Charlotte Hornets')).to.deep.equal([4, 0, 2, 8, 33]);
    });
    it('should return an error message if wrong team name or empty string', function () {
      expect(playerNumbers('wrong team name')).to.deep.equal("Error: You've entered an incorrect team name. Please try again");
      expect(playerNumbers('')).to.deep.equal("Error: You've entered an incorrect team name. Please try again");
      expect(playerNumbers()).to.deep.equal("Error: You've entered an incorrect team name. Please try again");
    });
  });

  describe('playerStats', function () {
    it('should return stats of a player', function () {
      expect(playerStats('Alan Anderson')).to.deep.equal({
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
      });

      expect(playerStats('Ben Gordon')).to.deep.equal({
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0
      });
    });
    it('should return an error message if wrong player name or empty string', function () {
      expect(playerStats('wrong player name')).to.deep.equal("Error: You've entered an incorrect player name. Please try again");
      expect(playerStats('')).to.deep.equal("Error: You've entered an incorrect player name. Please try again");
      expect(playerStats()).to.deep.equal("Error: You've entered an incorrect player name. Please try again");
    });
  });

  describe('bigShoeRebounds', function () {
    it('should return number of rebounds for the player with the biggest shoe', function () {
      expect(bigShoeRebounds()).to.equal(12);
    });
  });

  describe('mostPointsScored', function () {
    it('should return the name(s) of the player(s) with the most points', function () {
      expect(mostPointsScored()).to.deep.equal(['Ben Gordon']);
    });
  });

  describe('winningTeam', function () {
    it('should return the winning team or tie, if equal points', function () {
      expect(winningTeam()).to.deep.equal('Brooklyn Nets');
    });
  });

  describe('playerWithLongestName', function () {
    it('should return the player(s) with the longest name(s)', function () {
      expect(playerWithLongestName()).to.deep.equal(['Bismack Biyombo', 'Brendan Hayword']);
    });
  });
});