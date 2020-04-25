// Jeremiah Bonham
// SDI 1307
// Project 4
// Building a Library

var library = function () {

// * String Functions *

//check phone number

var isPhoneNum = function(string){
    var stringLen = string.length
    if (string.length != stringLen)
    {
    return false
    }
    var tmp = string.split("-")
    if (tmp[0].length != 3 || tmp[1].length != 3 || tmp[2].length != 4)
        return false
    else
    return true
}

//Email Check

var isValidEmailAddress = function(address) {
        if(address.indexOf(" ") !== -1) 
	{
	return false;
	}
	var tmp = address.split("@");
	if (tmp.length == 2) 
	{
	return true; 
	}
	return false
    
    };

// URL Check
    
var urlCheck = function (url) {
var enteredURL = url
    if (enteredURL.indexOf("http://") === 0)
    {
    return true
    }
    if (enteredURL.indexOf("https://") === 0)
    {
    return true
    }
    else return false
};

// Make Title Case

var makeTitleCase = function(string) {
    var stringLength = string.length;
    var splitString = string.split(" ");
    var caps = [];
        while (caps.length < splitString.length) {
            for (var i=0;i<splitString.length;i++) {
            var startLetter = splitString[i].substring(0,1);
            var makeCaps = startLetter.toUpperCase();
            var otherLetters = splitString[i].substring(1, splitString[i].length);
            otherLetters = otherLetters.toLowerCase()
            var newWord = makeCaps + otherLetters;
            caps.push(newWord);
            }
        }
    var capitalizedString = caps.join(" ");
    return capitalizedString;
};
    
// * Number Functions *

//Format Decimal

var assignDecimal = function (enteredNum) {
    
outputNum = enteredNum.toFixed(2);

return outputNum;	
};

// Convert to Number from String

var convertToNum = function(enteredString) {
    var stringtest = typeof(enteredString);
    if (stringtest == "number") {
   
   return ("The value given is not a string and is already a number")
    }
    if (stringtest == "string") 
    {   
    convertedString = parseFloat(enteredString);
    return convertedString
    };
    {
    return ("Neither a string nor a number")
    };
     

};



// * Array Functions *
    
return {

	"isValidEmailAddress": isValidEmailAddress,
        "assignDecimal": assignDecimal,
        "convertToNum": convertToNum,
        "isPhoneNum": isPhoneNum,
	"urlCheck": urlCheck,
        "makeTitleCase": makeTitleCase
};

};


var newLib = new library();
// * String Function Checks *

//Phone Number Check
console.log(newLib.isPhoneNum("123-456-7890"));

//Verify Email
console.log ("Is the provided string in the correct format to be an email address?  " + newLib.isValidEmailAddress("aaa@bbb.ccc") )
console.log ("Is the provided string in the correct format to be an email address?  " + newLib.isValidEmailAddress("a.@bb.cc@c") )

//URL Check
console.log (newLib.urlCheck("http://google.com"))
console.log (newLib.urlCheck("https://google.com"))
console.log (newLib.urlCheck("google.com"))

//Make Title Case
console.log (newLib.makeTitleCase("PlEaSe FiX ThIs StRiNg"))

// *Number Function Check*

//Format Decimal
console.log (newLib.assignDecimal (5.23659) );

//Convert to Number from String
console.log(newLib.convertToNum("42"))
console.log(newLib.convertToNum(42))