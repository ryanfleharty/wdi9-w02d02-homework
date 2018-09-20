
zero_to_one_inclusive = () =>{
    if(Math.random() == 0)
    return 1;
    else
    return Math.random();
}
inclusive_random_int = (min, max) => {
  range = max - min;
  return min + Math.round(game.zero_to_one_inclusive()*range);
}
class Player {
  constructor(name){
    this.name = name;
    this.hand = [];
    this.score = 0;
    this.rounds_won = 0;
  }
  draw() {
    while (this.hand.length < 3 && game.deck.length > 0){
      let card_drawn = inclusive_random_int(0,game.deck.length-1)
      this.hand.push(game.deck[card_drawn]);
      game.deck.splice(card_drawn,1);
    }
  }
  }
const game = {
  deck: [
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
  ],
  zero_to_one_inclusive(){
      if(Math.random() == 0){
        return 1;
      }
      else {
        return Math.random();
      }
  },
  inclusive_random_int(min, max){
    range = max - min;
    return min + Math.round(game.zero_to_one_inclusive()*range);
  },
  lets_battle(card1, card2){
    console.log(card1)
    if (card1.damage > card2.damage){
      this.eggbert.hand.splice(card1,1);
      this.rival_trainer.hand.splice(card2,1);
      return 1;
    }
    if (card2.damage > card1.damage){
      this.eggbert.hand.splice(card1,1);
      this.rival_trainer.hand.splice(card2,1);
      return 2;
    }
    else {
      this.eggbert.hand.splice(card1,1);
      this.rival_trainer.hand.splice(card2,1);
      return 0;}
  },
  eggbert: new Player("eggbert"),
  rival_trainer: new Player ("rival trainer"),
  do_battle(){
    this.eggbert.draw();
    this.rival_trainer.draw();
    result = this.lets_battle(this.eggbert.hand[inclusive_random_int(0,this.eggbert.hand.length-1)],this.rival_trainer.hand[inclusive_random_int(0,this.rival_trainer.hand.length-1)]);
    if (result === 1){
      console.log("eggbert wins!");
      this.eggbert.score++;
    }
    if (result === 2){
      console.log("rival trainer wins!");
      this.rival_trainer.score++;
    }
    if (result === 0){
      console.log("it's a draw!");
    }
    console.log(`eggbert:${this.eggbert.score} rival_trainer:${this.rival_trainer.score}`);
  },
  play(){
    this.do_battle();
    let battles_had = 1;
    while(this.eggbert.hand.length > 0 && this.rival_trainer.hand.length > 0){
      if(battles_had != 3){
        this.do_battle();
        battles_had++;
      }else{
        if(this.eggbert.score > this.rival_trainer.score){
          this.eggbert.rounds_won++;
          console.log("eggbert has won the round!")
        }else if(this.rival_trainer.score > this.eggbert.score){
          this.rival_trainer.rounds_won++;
          console.log("rival_trainer has won the round!")
        }else{
            console.log("the round is a tie!")
        }
        console.log(`Round Score: eggbert:${this.eggbert.rounds_won}   rival trainer: ${this.rival_trainer.rounds_won}`);
        this.rival_trainer.score = 0;
        this.eggbert.score = 0;
        battles_had = 0;
        this.do_battle();
        battles_had++
      }
    }
    if(this.eggbert.score > this.rival_trainer.score){
      this.eggbert.rounds_won++;
      console.log("eggbert has won the round!")
    }else if(this.rival_trainer.score > this.eggbert.score){
      this.rival_trainer.rounds_won++;
      console.log("rival_trainer has won the round!")
    }else{
        console.log("the round is a tie!")
    }
    this.rival_trainer.score = 0;
    this.eggbert.score = 0;
    battles_had = 0;
    console.log(`Round Score: eggbert:${this.eggbert.rounds_won}   rival trainer: ${this.rival_trainer.rounds_won}`);
    if (this.eggbert.rounds_won > this.rival_trainer.rounds_won){
      console.log("You win the match!");
    }else if (this.rival_trainer.rounds_won > this.eggbert.rounds_won){
      console.log("You lose the match!");
    }else{
      console.log("The match is a draw!");
    }
    }
}

game.play();
