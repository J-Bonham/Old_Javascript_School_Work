// Jeremiah Bonham
// SDI 1307
// Project 2
// Arrays, Functions, Returns

// I am usure about the returns.  I feel good about the loops and about the arrays, but if at all possible, when graded, it would be good to see what I have done wrong and how to correct it.

//Variables here
var say = function(message) { console.log(message); };
var playerType = ["Tank", "DPS", "Healer"];
var numOfPlayers = [2, 5, 3];
    
//Procedure - Determine if instance has reset

var instanceReady = function(raidTime, instanceReset) {
    if (raidTime === true)
        console.log("The instance has reset and it is time to start the Raid");
    else 
console.log("The instance is still locked to last week's attempt, so we must wait.");
};
instanceReady(true, true);

//Boolean Function Tanks ready=true?


var tanksReady = function(paladin, warrior) {
    if (paladin == "ready" && warrior === "ready"){
        tankBoolean = true;
    } else { (paladin != "ready" || warrior != "ready");
        tankBoolean = false;
    return tankBoolean;
    }
   
};

tanksReady("ready", "ready");




//Number Function - Do we still need to find DPS?
var players = 0;
    while (players < 5) {        
       say("We have " + players + " DPS and are still looking for " + (5 - players) + " DPS for the raid.")
    players++
        numFunction = ("We have " + players + " DPS and are still looking for " + (5 - players) + " DPS for the raid.")
if (players === 5);
    numFunction =("We have 5 and are no longer in need of DPS")
    };

//String Function Are the healers accounted for and ready?  Added a third string.

var healerTypes = function(h1, h2, h3){
    say ("We have a " + h1 + " , " + h2 + " , and a " + h3 + " to heal through tonight's Raid.")
    var healers = "ready";
return healersReady;
}

var healersReady = ("The healers are here and ready to go!");
  healerTypes("Priest", "Druid", "Shaman");



//Array Function

var missingBuffs = !5;
var myBuffs = ["Mark of the Wild", "Blessing of Fortitude", "Arcane Brilliance", "Battle Shout", "Blessing of Might"];
var buffLoop = function(buffs) {
    for (var i = 0; i < (buffs.length); i++) {
        say("All players recieve " + (i + 1) + " buffs, " + myBuffs[i]);
    };
   return missingBuffs;
   
}
buffLoop(myBuffs);  

missingBuffs = ("We all have " + myBuffs);

//Returned Values

say ("We need " + numOfPlayers[0] + " " + playerType[0] +"s, " + numOfPlayers[1] + " " + playerType[1]  +" and " + numOfPlayers[2] + " " + playerType[2] +"s to being the Raid.")
say ("It is " + tankBoolean + " that the tanks are ready");
say (numFunction);
say (healersReady);
say (missingBuffs);
say ("Let the Raid begin!");