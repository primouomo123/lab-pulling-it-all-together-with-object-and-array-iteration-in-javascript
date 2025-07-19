function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

//I call the gameObject function to store the object in a variable called gameObj
const gameObj = gameObject();

//I create objects for each team's players with their properties
const homePlayers = gameObj.home.players;
const awayPlayers = gameObj.away.players;

/*Here I create an object called allPlayers and I store all players names objects from both teams,
so later I can work with that more easily*/
const allPlayers = Object.assign({}, gameObj.home.players, gameObj.away.players);

/*I create an array with the all the players names, so I can have dynamic access to the allPlayers object
when creating the required functions*/
const playersNames = Object.keys(allPlayers);

/*Here I use the objects and array related to the players that I created to have an easier access to the properties of the object
inside gameObject function*/
function numPointsScored(playerName) {
    if (!playersNames.includes(playerName)) {
        return "Error: You've entered an incorrect player name. Please try again"; //Managing edge cases
    }

    return allPlayers[playerName].points;
}

/*Here I also use the objects and array related to the players that I created to have an easier access to the properties of the object
inside gameObject function*/
function shoeSize(playerName) {
    if (!playersNames.includes(playerName)) {
        return "Error: You've entered an incorrect player name. Please try again"; //Managing edge cases
    }

    return allPlayers[playerName].shoe;
}

function teamColors(teamName) {
    if (teamName !== gameObj.home.teamName && teamName !== gameObj.away.teamName) {
        return "Error: You've entered an incorrect team name. Please try again"; //Managing edge cases
    }

    if (teamName === gameObj.home.teamName) {
        return gameObj.home.colors; //In case the team is "Brooklyn Nets"
    }    
    else {
        return gameObj.away.colors; //In case the tam is "Charlotte Hornets"
    }
}

function teamNames() {
    const teams = [gameObj.home.teamName, gameObj.away.teamName];
    return teams;
}

function playerNumbers(teamName) {
    if (teamName !== gameObj.home.teamName && teamName !== gameObj.away.teamName) {
        return "Error: You've entered an incorrect team name. Please try again"; //Managing edge cases
    }

    const jerseyNumbers = [];

    if (teamName === gameObj.home.teamName) {
        for (let player in homePlayers) {
            jerseyNumbers.push(homePlayers[player].number); //In case the team is "Brooklyn Nets"
        }
    }    
    else {
        for (let player in awayPlayers) {
            jerseyNumbers.push(awayPlayers[player].number); //In case the team is "Charlotte Hornets"
        }
    }

    return jerseyNumbers;
}

function playerStats(playerName) {
     if (!playersNames.includes(playerName)) {
        return ("Error: You've entered an incorrect player name. Please try again"); //Managing edge cases
    }

    return allPlayers[playerName];
}

function bigShoeRebounds() {
    const shoeSizes = Object.values(allPlayers).map(player => { //Here I store all players' shoe sizes
        return player.shoe;
    });

    const biggestShoe = shoeSizes.reduce((max, size) => { //Here I get the biggest shoe size
        if (size > max) {
            max = size;
        }

        return max;
    });

    let reboundsOfBiggestShoe = [];

    for (let player in allPlayers) {
        if (allPlayers[player].shoe === biggestShoe) {
            reboundsOfBiggestShoe.push({ //I store all the players with the biggest shoe size with their corresponding rebounds
                name: player,
                rebounds: allPlayers[player].rebounds});
        }
    }

    if (reboundsOfBiggestShoe.length > 1) {
        return reboundsOfBiggestShoe; /*If there's more thann 1 player with the biggest shoe it returns an array of objects that
        specifies those players with their corresponding rebounds*/
    }

    return reboundsOfBiggestShoe[0].rebounds; /*I just return the rebounds of the player with the biggest shoe,
    as originally requested*/
}

function mostPointsScored() {
    const pointsScored = Object.values(allPlayers).map(player => { //Storing the points scored by each player
        return player.points;
    });

    const mostPoints = pointsScored.reduce((max, points) => { //Getting the maximum points scored by a player
        if (points > max) {
            max = points;
        }

        return max;
    });

    let playersWithMostPoints = [];

    for (let player in allPlayers) {
        if (allPlayers[player].points === mostPoints) {
            playersWithMostPoints.push(player); //Storing the player(s) with the maximum points scored 
        }
    }
    
    return playersWithMostPoints; //I decided to return an array in case there's more than 1 player with the maximum points scored
}

function winningTeam() {
    const homeTotalPoints = Object.values(homePlayers).reduce((total, player) => { //Adding total points of home team ("Brooklyn Nets")
        return total += player.points;
    }, 0);

    const awayTotalPoints = Object.values(awayPlayers).reduce((total, player) => { /*Adding the total points of the away team
        ("Charlotte Hornets")*/
        return total += player.points;
    }, 0);

    if (homeTotalPoints === awayTotalPoints) {
        return "Tie"; //In case it's a tie.
    }
    else if (homeTotalPoints > awayTotalPoints) {
        return gameObj.home.teamName; //In case "Brooklyn Nets" wins
    }
    else {
        return gameObj.away.teamName; ////In case "Charlotte Hornets" wins
    }
}

function playerWithLongestName() {
    const longestNameLength = playersNames.reduce((longest, player) => { //I get the length of the longest name(s)
        if (player.length > longest) {
            return longest = player.length;
        }
        
        return longest;
    }, 0);

    const longestName = [];
    
    for (let player of playersNames) {
        if (player.length === longestNameLength) {
            longestName.push(player);
        }
    }

    return longestName; //I return an array with the player(s) with the longest name(s)
}

function doesLongNameStealATon() {
    const steals = [];
    
    Object.values(allPlayers).map(player => {
        steals.push(player.steals); //I get each payer's steals
        return steals;
    });

    const mostSteals = steals.reduce((total, steal) => { //I get the maximum steals
        if (steal > total) {
            total = steal;
        }

        return total;
    });

    const longestNames = playerWithLongestName(); /*I call playerWithLongestName function to get the player(s) with the longest
    name(), so I can compare if their steals is equal to the maximum steals or not*/

    let answer;

    for (let player of longestNames) {
        if (allPlayers[player].steals === mostSteals) {
            answer = (allPlayers[player].steals === mostSteals); /*Here I  store the boolean value of true (if one of the players
            with the longest name also has the most steals)  or false (if it is not the case)*/
        }        
    }

    return answer;
}

numPointsScored("Alan Anderson");
shoeSize("Brendan Hayword");
teamColors("Brooklyn Nets");
teamNames();
playerNumbers("Charlotte Hornets");
playerStats("Jeff Adrien");
bigShoeRebounds();
mostPointsScored();
winningTeam();
playerWithLongestName();
doesLongNameStealATon();