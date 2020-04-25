$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addItem').on('pageinit', function(){

		var myForm = $('#addForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};




    // Quick Use Functions
    var geID = function (x) {
        var elID = document.getElementById(x);
        return elID;
    }
    var crID = function (x) {
        var crID = document.createElement(x);
        return crID;
    }

    //Global Variables
    var title = geID("title");
    var enteredName = geID("name");
    var dateLoaned = geID("dateLoaned");
    var loanTime = geID("loantime");
    var reminder = geID("reminder");
    var extra = geID("extra");
    var typeSelect = geID("selection");
    var data = geID("data");
    var save = geID("save");


    var info = {};
    var itemType = ["-Choose Item Type-", "Movie", "Game", "Book"];
    errors = geID("errors")
    var items = geID("items");
    var capture = function () {
        localStorage.setItem("Title", title.value);
        localStorage.setItem("Item Type", selection.value)
        localStorage.setItem("Length of Loan", loanTime.value)
        localStorage.setItem("Name", enteredName.value);
        localStorage.setItem("Date", dateLoaned.value);
        localStorage.setItem("Remind", reminder.checked)
        localStorage.setItem("Extra Information", extraInfo.value);
    };

    // Category Array

    function createSelect() {
        selectLi = geID("select"),
        makeSelect = crID("select");
        makeSelect.setAttribute("id", "selection");
        for (var i = 0, j = itemType.length; i < j; i++) {
            var makeOption = crID("option");
            var optText = itemType[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }

    

    // Save Data

    function saveData(key) {
        if (!key) {
            var itemID = Math.floor(Math.random() * 1000005);
        } else {
            itemID = key;
        };
        var info = {};
        info.title = ["Title - ", geID("title").value];
        info.selection = ["Item Type - ", geID("selection").value];
        info.name = ["Name - ", geID("name").value];
        info.dateLoaned = ["Date - ", geID("dateLoaned").value];
        info.loantime = ["Length of Loan - ", geID("loantime").value];
        info.remind = ["Reminder Sent - ", geID("remind").checked];
        info.extraInfo = ["Extra Information - ", geID("extraInfo").value];


        localStorage.setItem(itemID, JSON.stringify(info));
        alert("Information has been saved!");

    }

    // Display Data

    function viewStored() {
    if (localStorage.length === 0) {
            alert("No records found. Test items added.");
            autoPop();
        };
        var makeDiv = crID("div");
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        geID("items").style.display = "block";
        for (var i = 0, j = localStorage.length; i < j; i++) {
            var makeli = crID("li");
            var linksLi = crID("li");
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
            var makeSubList = crID("ul");
            var makeDivider = document.createElement("hr");
            makeli.appendChild(makeSubList);
            makeli.appendChild(makeDivider);
            getImage(obj.selection[1], makeSubList);
            for (var n in obj) {
                var makeSubli = crID("li");
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0] + " " + obj[n][1];
                makeSubli.innerHTML = optSubText;
                makeSubli.appendChild(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi);
        }
    }



    function getImage(itemName, makeSubList) {
        var imageLi = crID("li")
        makeSubList.appendChild(imageLi)
        var newImg = crID("img")
        var setSrc = newImg.setAttribute("src", "images/" + itemName + ".png")
        imageLi.appendChild(newImg)
    }

    var makeItemLinks = function (key, linksLi) {

        //Edit Link
        var editLink = crID("a");
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Item";
        editLink.addEventListener("click", editItem);
        editLink.innerHTML = editText;
        linksLi.appendChild(editLink)

        //Break Tag
        var breakTag = crID("br");
        linksLi.appendChild(breakTag);

        //Delete Link
        var deleteLink = crID("a");
        deleteLink.href = "#";
        deleteLink.key = key;
        var editDel = "Delete Item";
        deleteLink.addEventListener("click", deleteItem)
        deleteLink.innerHTML = editDel;
        linksLi.appendChild(deleteLink);

    }

        function editItem() {
            var value = localStorage.getItem(this.key);
            var info = JSON.parse(value);
            geID("title").value = info.title[1];
            geID("selection").value = info.selection[1];
            geID("name").value = info.name[1];
            geID("dateLoaned").value = info.dateLoaned[1];
            geID("loantime").value = info.loantime[1];
            geID("reminder").value = info.reminder[1];
            geID("extraInfo").value = info.extraInfo[1];

            isItChecked = localStorage.getItem(reminder);
            console.log(info.reminder[1])

            if (info.reminder[1] === true) {
                reminder.checked = true
            } else {
                console.log("its not checked");
            }


            geID("save").value = "Save Changes";
            var editSubmit = geID("save");
            editSubmit.addEventListener("click", validate);
            editSubmit.key = this.key;
        }

        function deleteItem() {
            var checkDelSingle = confirm("Are you sure you want to remove this item?");
            if (checkDelSingle) {
                localStorage.removeItem(this.key);
                alert("Item Deleted");
                window.location.reload();
            }
        }
    var clearData = geID("clearData");
    clearData.addEventListener("click", clearAll);

    function clearAll() {
        var checkDelAll = confirm("Are you sure you want to clear all stored data?");
        if (checkDelAll) {
            if (localStorage.length === 0) {
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
        for (var n in json) {
            var itemID = Math.floor(Math.random() * 1000005);
            localStorage.setItem(itemID, JSON.stringify(json[n]));
        }
    }


    function validate() {
        var getTitle = title.value;
        var getSelect = selection.value;
        var getName = enteredName.value;

                if ((getTitle === "") || (getSelect === "") || (getName === "")){
                var titleError = "Check Required Fields"
                alert(titleError)
                
                
               // if (getSelect === "") {
                //  var selError = "Please choose an item type!"
                //  alert(selError)


           // if (getName === "") {
            //    var nameError = "Please enter a name"
            //    alert(nameError)
            

                } else {
                saveData(this.key)
                window.location.reload();
                }
    }

    //var viewData = geID("viewData");
    //viewData.addEventListener("click", viewStored);

    //Capture Data
    var items = geID("items");
    var capture = function () {
        localStorage.setItem("Title", title.value);
        localStorage.setItem("Item Type", selection.value)
        localStorage.setItem("Length of Loan", loanTime.value)
        localStorage.setItem("Name", enteredName.value);
        localStorage.setItem("Date", dateLoaned.value);
        localStorage.setItem("Reminder", reminder.checked)
        localStorage.setItem("Extra Information", extraInfo.value);

    };

 /*   // Capture Events 
    title.addEventListener("blur", capture);
    select.addEventListener("change", capture)
    enteredName.addEventListener("blur", capture);
    date.addEventListener("blur", capture)
    extra.addEventListener("blur", capture)
    loanTime.addEventListener("change", capture)
    reminder.addEventListener("change", capture)
    save.addEventListener("click", capture)
*/
    //Event Listeners
    
    save.addEventListener("click", validate)

/*
    var recolorBorder = function () {
        title.setAttribute("class", "hasFocus");
    }

    var resetBorder = function () {
        title.removeAttribute("class", "hasFocus");
    }
    title.addEventListener("focus", recolorBorder);
    title.addEventListener("blur", resetBorder);

    var recolorBorder = function () {
        enteredName.setAttribute("class", "hasFocus");
    }
    var resetBorder = function () {
        enteredName.removeAttribute("class", "hasFocus");
    }
    enteredName.addEventListener("focus", recolorBorder);
    enteredName.addEventListener("blur", resetBorder);
*/

