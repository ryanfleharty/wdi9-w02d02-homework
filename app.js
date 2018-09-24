//THE ARRAY OF CARDS

const cards = [
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
]

class Player {
	constructor(name){
		this.name = name;
		this.hand = [];
		this.points = 0;
		this.roundsWon = 0;
		this.handLength = 3;
	}
	addToHand(){
		const card = game.deck.splice(Math.floor(Math.random()*game.deck.length), 1)[0];
		this.hand.push(card);
	}
}

const game = {
	deck: cards,
	cardsPlayed: [],
	eggbert: new Player('eggbert'),
	computer: new Player('computer'),
	roundsPlayed: 0,
	sizeOfHand: 3,
	
	drawHands: function(player1, player2, handSize) {
		for (let i = 0; i < handSize; i++){
			player1.addToHand();
			player2.addToHand();
		}
	},

	displayStats: function(player1, player2){
		console.log(`Score: ${this.eggbert.name}: ${this.eggbert.points}, ${this.computer.name}: ${this.computer.points}`);

	},

	battle: function(player1, player2) {
		if (player1.damage > player2.damage){
			player1.points++;
		}
		else if (player2.damage > player1.damage){
			player2.points++;
		}
		this.displayStats(this.eggbert, this.computer);
		this.cardsPlayed.push(player1.hand.splice(0,1)[0]);
		this.cardsPlayed.push(player2.hand.splice(0,1)[0]);
	},

	determineRoundWinner: function(player1,player2) {
		if (player1.points > player2.points){
			player1.roundsWon++;
			console.log(`${player1.name} won! ${player2.name} sucks`);
		}
		else if (player2.points > player1.points) {
			player2.roundsWon++;
			console.log(`${player2.name} won! ${player1.name} sucks`);
		}
		else {
			console.log('It was a tie!');
		}
	},

	playRound: function(player1, player2) {
		while((player1.hand.length > 0) && (player2.hand.length > 0)){
			this.battle(player1, player2);
		}
		this.determineRoundWinner(player1,player2);
		player1.points = 0;
		player2.points = 0;
	},

	determineGameWinner: function(player1, player2) {
		if (player1.roundsWon > player2.roundsWon){
			console.log(`${player1.name} won the game! ${player2.name} sucks!`);
		}
		else if (player2.roundsWon > player1.roundsWon){
			console.log(`${player2.name} won the game! ${player1.name} sucks!`);
		}
		else {
			console.log('It was a tie game!');
		}
	},

	playGame: function() {
		this.drawHands(this.eggbert, this.computer, this.sizeOfHand); 
		this.playRound(this.eggbert, this.computer);
	},

	startGame: function() {
		while((this.sizeOfHand*2) <= this.deck.length){
			this.playGame(this.eggbert, this.computer);
			console.log(this.deck);
		}
		console.log('Out of Cards to play with, Game Over!');
		this.determineGameWinner(this.eggbert, this.computer);
	}	
}

game.startGame();
