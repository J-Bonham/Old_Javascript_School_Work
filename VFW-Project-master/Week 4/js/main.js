// Jeremiah Bonham
// VFW 1308
// Week 3 JS

// Dom has loaded

window.addEventListener("DOMContentLoaded", function(){

    // Quick Use Functions
    var $ = function (x) {
        var elID = document.getElementById(x);
        return elID;
    }
    var $C = function (x) {
        var crID = document.createElement(x);
        return crID;
    }

    //Global Variables
    var title = $("title");
    var enteredName = $("name");
    var date = $("date");
    var loanTime = $("loantime");
    var reminder = $("reminder");
    var extra = $("extra");
    var typeSelect = $("selection");
    var data = $("data");
    var save = $("save");
    
    
    var info = {};
    var itemType = ["-Choose Item Type-", "Movie", "Game", "Book"];
    errors = $("errors")
    var items = $("items");
    var capture = function (){
        localStorage.setItem("Title", title.value);
        localStorage.setItem("Item Type", selection.value)
        localStorage.setItem("Length of Loan", loanTime.value)
        localStorage.setItem("Name", enteredName.value);
        localStorage.setItem("Date", date.value);
        localStorage.setItem("Remind", reminder.checked)
        localStorage.setItem("Extra Information", extra.value);
    };

    // Category Array
    function createSelect() {
        selectLi = $("select"),
        makeSelect = $C("select");
        makeSelect.setAttribute("id", "selection");
        for(var i=0, j=itemType.length; i<j; i++) {
        	var makeOption = $C("option");
        	var optText = itemType[i];
        	makeOption.setAttribute("value", optText);
        	makeOption.innerHTML = optText;
        	makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
   
    // Toggle Control
    var toggle = function (n) {
        switch (n) {
    	case "on":
    	   $("data").style.display = "none";
    	   $("clearData").style.display = "inline";
    	   $("viewData").style.display = "none";
    	   $("addNew").style.display = "inline";
    	   $("home").style.display = "none";
    	   break;
    	
	case "off":
    	   $("data").style.display = "block";
    	   $("clearData").style.display = "inline";
    	   $("viewData").style.display = "inline";
    	   $("addNew").style.display = "none";
    	   $("home").style.display = "inline";
    	   break; 
    	
	default:
    	   return false;
        };
    };
   
    // Save Data
    function saveData(key) {
	if (!key) {
	    var itemID = Math.floor(Math.random()*1000005);
	} else {
	itemID = key;
	}
            var info = {};
		info.title =		["Title - ", $("title").value];
		info.selection = 	["Item Type - ", $("selection").value];
                info.name = 		["Name - ", $("name").value];
                info.date = 		["Date - ", $("date").value];
                info.loantime = 	["Length of Loan - ", $("loantime").value];
                info.reminder = 	["Reminder Sent - ", $("reminder").checked];
                info.extra = 		["Extra Information - ", $("extra").value];
               
        
        localStorage.setItem(itemID, JSON.stringify(info));
	alert("Information has been saved!");
    
    } 

    // Display Data
    function viewStored() {
	toggle("on");
	if(localStorage.length === 0) {
		alert("No records found. Test items added.");
		autoPop()
	}
	var makeDiv = $C("div");
	makeDiv.setAttribute("id","items");
	var makeList = document.createElement("ul");
	makeDiv.appendChild(makeList);
	document.body.appendChild(makeDiv);
	for(var i=0, j=localStorage.length; i<j; i++) {
	    var makeli = $C("li");
	    var linksLi = $C("li");
	    makeList.appendChild(makeli);
	    var key = localStorage.key(i);
	    var value = localStorage.getItem(key);
	    var obj = JSON.parse(value);
	    var makeSubList = $C("ul");
	    var makeDivider = document.createElement("hr");
	    makeli.appendChild(makeSubList);
	    makeli.appendChild(makeDivider);
	    getImage(obj.selection[1], makeSubList);
	    for(var n in obj) {
		var makeSubli = $C("li");
		makeSubList.appendChild(makeSubli);
		var optSubText = obj[n][0] + " " + obj[n][1];
		makeSubli.innerHTML = optSubText;
		makeSubli.appendChild(linksLi);
	    }
	makeItemLinks(localStorage.key(i), linksLi);
	}
    }

        
    
    function getImage(itemName, makeSubList) {
	var imageLi = $C("li")
	makeSubList.appendChild(imageLi)
	var newImg = $C("img")
	var setSrc = newImg.setAttribute("src", "img/" + itemName + ".png")
	imageLi.appendChild(newImg)
    }
	
    var makeItemLinks = function (value, linksLi) {
	
    //Edit Link
    var editLink = $C("a");
    editLink.href = "#";
    editLink.key = value;
    var editText = "Edit Item";
    editLink.addEventListener("click",editItem);
    editLink.innerHTML = editText;
    linksLi.appendChild(editLink)
	
    //Break Tag
    var breakTag = $C("br");
    linksLi.appendChild(breakTag);
    	
    //Delete Link
    var deleteLink = $C("a");
    deleteLink.href = "#";
    deleteLink.key = value;
    var editDel = "Delete Item";
    deleteLink.addEventListener("click", deleteItem)
    deleteLink.innerHTML = editDel;
    linksLi.appendChild(deleteLink);
    			
    }
    
    function editItem(key) {
    var value = localStorage.getItem(this.key);
    var info = JSON.parse(value);
    toggle("off");
	$("title").value = info.title[1];
        $("selection").value = info.selection[1];
        $("name").value = info.name[1];
        $("date").value = info.date[1];
        $("loantime").value = info.loantime[1];
        $("reminder").value = info.reminder[1];
	$("extra").value = info.extra[1];
	
	isItChecked = localStorage.getItem(reminder);
	console.log(info.reminder[1])
	
	if(info.reminder[1] === true) { 
        reminder.checked = true
	} else {
        console.log("its not checked");
	}
	
			
	$("save").value = "Save Changes";
	var editSubmit = $("save");
	editSubmit.key = this.key;
    }

    function deleteItem() {
	var checkDelSingle = confirm("Are you sure you want to remove this item?");
	if(checkDelSingle)	{
	localStorage.removeItem(this.key);
	alert("Item Deleted");
	window.location.reload();
        } 
    }
    var clearData = $("clearData");
    clearData.addEventListener("click", clearAll);
    function clearAll() {
	var checkDelAll = confirm("Are you sure you want to clear all stored data?");
	if(checkDelAll){
	    if(localStorage.length === 0) {
	    alert("No Data to Clear");
	    } else {
	    localStorage.clear();
	    alert("All Items Removed");
	    window.location.reload();
	    return false;
	    }
        }
    }
    
    function autoPop() {
    	for(var n in json) {
	var itemID = Math.floor(Math.random()*1000005);
	localStorage.setItem(itemID, JSON.stringify(json[n]));
	}
    }
    
  
    function validate() {
	    var getTitle = title.value;
	    var getSelect = selection.value;
	    var getName = enteredName.value;
	    
	    if (getTitle === "") {
	    var titleError = "Please enter a title!"
	    alert(titleError)
       
	          
	    if (getSelect === "-Choose Item Type-"){
		var selError = "Please choose an item type!"
		alert(selError)
	    }
            
	    if (getName === "") {
		var nameError = "Please enter a name"
		alert(nameError)
	    }
	      
	    } else {
		saveData(this.key)
		window.location.reload();
    
	    }
    }
 

    var viewData = $("viewData");
    viewData.addEventListener("click", viewStored);
   
    //Capture Data
    var items = $("items");
    var capture = function (){
        localStorage.setItem("Title", title.value);
        localStorage.setItem("Item Type", selection.value)
        localStorage.setItem("Length of Loan", loanTime.value)
        localStorage.setItem("Name", enteredName.value);
        localStorage.setItem("Date", date.value);
        localStorage.setItem("Reminder", reminder.checked)
        localStorage.setItem("Extra Information", extra.value);
        
    };
    
    // Capture Events 
    title.addEventListener("blur", capture );
    select.addEventListener("change", capture)
    enteredName.addEventListener("blur", capture );
    date.addEventListener("blur", capture)
    extra.addEventListener("blur", capture)
    loanTime.addEventListener("change", capture)
    reminder.addEventListener("change", capture)
    save.addEventListener("click", capture)
    
    //Event Listeners
    save.addEventListener("click", validate)

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
 
    //Call Function
    createSelect()
    
});