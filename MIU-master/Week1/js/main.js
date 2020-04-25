// Jeremiah Bonham
// MIU 1309
// Week 1
// Dom has loaded
window.addEventListener("DOMContentLoaded", function () {

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
    var date = geID("date");
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
        localStorage.setItem("Date", date.value);
        localStorage.setItem("Remind", reminder.checked)
        localStorage.setItem("Extra Information", extra.value);
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

    // Toggle Control
    var toggle = function (n) {
        switch (n) {
        case "on":
            geID("data").style.display = "none";
            geID("clearData").style.display = "inline";
            geID("viewData").style.display = "none";
            geID("addNew").style.display = "inline";
            geID("home").style.display = "none";
            break;

        case "off":
            geID("data").style.display = "block";
            geID("clearData").style.display = "inline";
            geID("viewData").style.display = "inline";
            geID("addNew").style.display = "none";
            geID("home").style.display = "inline";
            break;

        default:
            return false;
        };
    };

    // Save Data

    function saveData(key) {
        if (!key) {
            var itemID = Math.floor(Math.random() * 1000005);
        } else {
            itemID = key;
        }
        var info = {};
        info.title = ["Title - ", geID("title").value];
        info.selection = ["Item Type - ", geID("selection").value];
        info.name = ["Name - ", geID("name").value];
        info.date = ["Date - ", geID("date").value];
        info.loantime = ["Length of Loan - ", geID("loantime").value];
        info.reminder = ["Reminder Sent - ", geID("reminder").checked];
        info.extra = ["Extra Information - ", geID("extra").value];


        localStorage.setItem(itemID, JSON.stringify(info));
        alert("Information has been saved!");

    }

    // Display Data

    function viewStored() {
        toggle("on");
        if (localStorage.length === 0) {
            alert("No records found. Test items added.");
            autoPop()
        }
        var makeDiv = crID("div");
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
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
        var setSrc = newImg.setAttribute("src", "img/" + itemName + ".png")
        imageLi.appendChild(newImg)
    }

    var makeItemLinks = function (value, linksLi) {

        //Edit Link
        var editLink = crID("a");
        editLink.href = "#";
        editLink.key = value;
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
            geID("title").value = info.title[1];
            geID("selection").value = info.selection[1];
            geID("name").value = info.name[1];
            geID("date").value = info.date[1];
            geID("loantime").value = info.loantime[1];
            geID("reminder").value = info.reminder[1];
            geID("extra").value = info.extra[1];

            isItChecked = localStorage.getItem(reminder);
            console.log(info.reminder[1])

            if (info.reminder[1] === true) {
                reminder.checked = true
            } else {
                console.log("its not checked");
            }


            geID("save").value = "Save Changes";
            var editSubmit = geID("save");
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

        if (getTitle === "") {
            var titleError = "Please enter a title!"
            alert(titleError)


            if (getSelect === "-Choose Item Type-") {
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


    var viewData = geID("viewData");
    viewData.addEventListener("click", viewStored);

    //Capture Data
    var items = geID("items");
    var capture = function () {
        localStorage.setItem("Title", title.value);
        localStorage.setItem("Item Type", selection.value)
        localStorage.setItem("Length of Loan", loanTime.value)
        localStorage.setItem("Name", enteredName.value);
        localStorage.setItem("Date", date.value);
        localStorage.setItem("Reminder", reminder.checked)
        localStorage.setItem("Extra Information", extra.value);

    };

    // Capture Events 
    title.addEventListener("blur", capture);
    select.addEventListener("change", capture)
    enteredName.addEventListener("blur", capture);
    date.addEventListener("blur", capture)
    extra.addEventListener("blur", capture)
    loanTime.addEventListener("change", capture)
    reminder.addEventListener("change", capture)
    save.addEventListener("click", capture)

    //Event Listeners
    save.addEventListener("click", validate)

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

    //Call Function
    createSelect()

});