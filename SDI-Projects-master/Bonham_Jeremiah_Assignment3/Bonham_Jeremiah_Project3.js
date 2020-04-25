// Jeremiah Bonham
// SDI Project 3
// Objects
// Puchase a New Car
// I know that I am missing a few(or more) elements here.  Everytime I think I understand something, I find it does not work.
// With that said, I do have the "ah ha" moments when something just clicks for me.  I have even woken up over the last week in the morning with the correct code in my head and jotted it down on paper to use for the assignment.
// It sounds common for people to need to retake this class.  I hope to pass, and if I do, could you direct me to specific things to work on?  Obviously, my goal is to get better at this.
//start

//json data

var vehiclesInfo = {
   
   "vehicle": [
        {
        "make": "Honda",
        "model": "Fit",
        "legroom": true,
        "headroom": false,
        "sticker": 25000,
        "mpg": [28, 32]
        },
        {
        "make": "Scion",
        "model": "IQ",
        "legroom": false,
        "headroom": true,
        "sticker": 18000,
        "mpg": [30, 34]
        },
        {
        "make": "Toyota",
        "model": "Prius",
        "legroom": true,
        "headroom": true,
        "sticker": 27000,
        "mpg": [51, 46]
        }
    ]
};

//Global Variables
var tradeIn = ("2005 Scion XB");


//for loop
console.log("I am looking at the following three vehicles to purchase.");

for (var key in vehiclesInfo.vehicle) {
    if (vehiclesInfo.vehicle[key].make == "Toyota") {
    console.log (vehiclesInfo.vehicle[key].model);
    }   
    if (vehiclesInfo.vehicle[key].make == "Honda"){
    console.log (vehiclesInfo.vehicle[key].model);
    }
      if (vehiclesInfo.vehicle[key].make == "Scion"){
    console.log (vehiclesInfo.vehicle[key].model);
      }
}

//Comfort
console.log("I am a tall guy, so comfort level is very important to me in the cars that I own.")

for (var key in vehiclesInfo.vehicle) {
    if (vehiclesInfo.vehicle[key].legroom == true)
    //console.log ("The " + vehiclesInfo.vehicle[key].model + " offers enough legroom.")
    if (vehiclesInfo.vehicle[key].legroom == false)
    //console.log ("The " + vehiclesInfo.vehicle[key].model + " does not have enough room to accomodate my legs.")
//return legroom

    
var comfortLevel = function(){
for (var key in vehiclesInfo.vehicle) {
    if (vehiclesInfo.vehicle[key].headroom == true)
    //console.log ("The " + vehiclesInfo.vehicle[key].model + " offers enough headroom.")

   if (vehiclesInfo.vehicle[key].headroom == false)
    //console.log ("The " + vehiclesInfo.vehicle[key].model + " does not have enough room to accomodate my height.")
return headroom
}

return comfortLevel
}
var legroom = vehiclesInfo.vehicle[key].legroom
var headroom = vehiclesInfo.vehicle[key].headroom
}
console.log("It is " + legroom + " that the legroom is enough and it is " + headroom + " that the headroom is more than enough in the " + (vehiclesInfo.vehicle[key].make) + " " + (vehiclesInfo.vehicle[key].model))


//Options
var options = function (optionsChosen) {
while (optionsChosen != [White, MP3, Automatic, Navigation])
    {
    return options;
    }
}

//Cost Math Operation

var totalCost = vehiclesInfo.vehicle[2].sticker;
var maxLoan = 20000;

var tradeValue = 5000;
var moneyDown = function (moneyNeeded) {
    moneyNeeded = (totalCost - (maxLoan + tradeValue)) 
       	while (moneyNeeded > totalCost - (maxLoan + tradeValue))   {
	var moneyDown = function(){moneyDown = moneyDown + 1000};
        return moneyDown
        var moneyDown = (totalCost - (maxLoan + tradeValue))
        
      }       
}
console.log ("The options that I have chosen are " + options);
console.log ("The total price of the vehicle is " + totalCost);
console.log (" I have a " + tradeIn + " worth $ " + tradeValue);
console.log(" I will also put down $ " + moneyDown);

