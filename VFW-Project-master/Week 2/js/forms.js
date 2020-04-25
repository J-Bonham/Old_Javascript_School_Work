// Jeremiah Bonham
// VFW 1308
// Week 2 JS

// Dom has loaded
//*********************************************//
window.addEventListener("DOMContentLoaded", function(){

   //Global Variables
//*********************************************//
    
    var title = document.getElementById("title");
    var enteredName = document.getElementById("name");
    var date = document.getElementById("date");
    var loanTime = document.getElementById("loantime");
    var reminder = document.getElementById("reminder");
    var extra = document.getElementById("extra");
    //var items = document.getElementById("items"); could be part of the array problem
    var data = document.getElementById("data");
    document.getElementById("reminder").checked;

// create random item ID
//*********************************************//

    itemID = Math.floor(Math.random()*1000000);
   
// Category Array
//*************************************************//

    var selText
    function createSelect(){
        var targetDiv = document.getElementsByTagName("div")
        
        selectLi = document.getElementById("items")
        makeSelect = document.createElement("select");
        makeSelect.setAttribute("id", "items");
        for(var i=0, j=itemType.length; i<j; i++){
        var makeOption = document.createElement("option");
        var optText = itemType[i];
        makeOption.setAttribute("value",optText);
        makeOption.innerHTML = optText;
        makeSelect.appendChild(makeOption);
        var createOpt = document.createElement("optgroup")
        createOpt.innerHTML
        makeOption.appendChild(createOpt)
        }
        selectLi.appendChild(makeSelect);
        
    }
 
      
var itemType = ["-- Type of Item --", "Movie", "Game", "Book"];   
   
// Save Data
//*************************************************//

    var saveData = function () {
	
            var info = {};
		info.title = ["Title - ", document.getElementById("title").value];
		info.items = ["Type of Item - ", document.getElementById("items").value];
                info.name = ["Name - ", document.getElementById("name").value];
                info.date = ["Date - ", document.getElementById("date").value];
                info.loantime = ["Length of Loan - ", document.getElementById("loantime").value];
                info.loantime = ["Reminder Sent - ", document.getElementById("reminder").value];
                info.extra = ["Extra Information - ", document.getElementById("extra").value];
                
        
        localStorage.setItem(itemID, JSON.stringify(info));
	alert("Information has been saved!");

    } 

    save.addEventListener("click", saveData)
   
// Display 
//*************************************************// 
    
    
    
    var viewStored = function () {
        document.body.innerHTML = "";
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "data");
        createDiv.setAttribute("class", "important");
        var createList = document.createElement("ul");
        createDiv.appendChild(createList);
        document.body.appendChild(createDiv);
        document.getElementById("data").style.display = "display";
            for (i=0,j=localStorage.length; i<j; i++) {
                var createLi = document.createElement("li");
		createList.appendChild(createLi);
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var createSubList = document.createElement("ul");
		createLi.appendChild(createSubList);
	        for (n in obj) {
		var createLi = document.createElement("li");
		createSubList.appendChild(createLi);
		var liText = obj[n][0] + " " + obj[n][1];
		createLi.innerHTML = liText;
	    };
	};
    };

    var viewData = document.getElementById("viewData");
    viewData.addEventListener("click", viewStored);

        
// Clear Function
//*************************************************//  
    
     var clearStored = function(){
            localStorage.clear();
            window.location.reload();
            alert ("All information cleared.")
        };
        
    var clearData = document.getElementById("clearData");
    clearData.addEventListener("click", clearStored);

//Capture Data
//*********************************************//

var items = document.getElementById("items");
    var capture = function (){
        localStorage.setItem("Item ID", itemID)       
        localStorage.setItem("Title", title.value);
        localStorage.setItem("Type of Item", items.value)
        localStorage.setItem("Length of Loan", loanTime.value)
        localStorage.setItem("Name", enteredName.value);
        localStorage.setItem("Date", date.value);
        localStorage.setItem("Remind", reminder.checked)
        localStorage.setItem("Extra Information", extra.value);
        
    };

    var getData = function(){
        var titleKey = localStorage.key("Title")
        var titleValue = localStorage.getItem(titleKey)
    };
    
// Capture Events
   
    title.addEventListener("blur", capture );
    //items.addEventListener("change", capture)  not sure if this is where the main problem is
    enteredName.addEventListener("blur", capture );
    date.addEventListener("blur", capture)
    extra.addEventListener("blur", capture)
    loanTime.addEventListener("change", capture)
    reminder.addEventListener("change", capture)
    save.addEventListener("click", capture)

    getData();

// Style Event Listeners
//*************************************************//

    var recolorBorder = function() {
        title.setAttribute("class", "hasFocus");
    }
    
    var resetBorder = function() {
       title.removeAttribute("class", "hasFocus");
    }
        title.addEventListener("focus", recolorBorder);
        title.addEventListener("blur", resetBorder);
        
    var recolorBorder = function() {
        enteredName.setAttribute("class", "hasFocus");
    }
    var resetBorder = function() {
       enteredName.removeAttribute("class", "hasFocus");
    }
        enteredName.addEventListener("focus", recolorBorder);
        enteredName.addEventListener("blur", resetBorder);
 
//Call Functions
//*************************************************//
createSelect()

});