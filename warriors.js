/* --------------------------------OBJECTS-------------------------------- */


/** Q1. Create a constructor function called `Warrior` that can create new warriors. This function 
    will take parameters `name`, and `gender`. `name` can be any string, `gender` can be `M` 
    or `F`. It should create a warrior that has these properties:
    * `name`: the value that was passed to the constructor
    * `gender`: the value that was passed to the constructor
    * `level`: 1
    * `weapon`: wooden sword
    * `power`: a random number between 1 and 100
  * In addition to that, every object that gets created should have the following methods:
    * `fight`: will output to the console: "<name> rushes to the arena with <his/her> <weapon>"
    * `faceoff`: faceoff takes one argument called `opponent`. Based on the `power` of each 
        opponent, this method should output to the console which player won the fight based on 
        their power. Be as creative as you like with the text of this method :)
  * Finally, create a bunch of warriors and make them fight together.*/

  var warriorPrototype = {
    name: null,
    gender: null,
    level: 1,
    weapon: 'wooden sword',
    power: null,
    fight: function(){
        var pronoun = null;
        if(this.gender === 'F'){
            pronoun = 'her';
        }
        else {
            pronoun = 'his';
        }
            console.log(this.name + ' rushes to the arena with ' + pronoun + ' ' + this.weapon + '!');
        },
    faceoff: function(opponent){
        if(this.power > opponent.power){
        console.log('Wow, an epic battle! ' + this.name + ' pulls out the win!');
    }
        else {
            console.log('Another gnarly fight between these two! This time ' + opponent.name + ' wins!')
        }
  }
  }
  
  
  
  function Warrior (name, gender){
      var warrior = Object.create(warriorPrototype)
      if (typeof name === 'string'){
          warrior.name = name;
      }
      if (gender === 'F' || gender === 'M'){
          warrior.gender = gender;
      }
      warrior.power = Math.random() * 100;
      return warrior;
  }
  
var aladdin = Warrior('Aladdin', 'M');
var jasmine = Warrior('Jasmine', 'F');

aladdin.fight();
jasmine.fight();
aladdin.faceoff(jasmine);
