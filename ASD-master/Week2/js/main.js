// Jeremiah Bonham ASD 1311

// Functions for Home
$("#home").on("pageinit", function(){
});	

//Functions for Add Item Page		
$("#add").on("pageinit", function(){
	delete $.validator.methods.date;
	var myForm = $("#addForm");
	//console.log(myForm)
	myForm.validate({
		invalidHandler: function(form, validator) {
		},
		submitHandler: function() {
			var data = myForm.serializeArray();
			storeData(data);
                        //console.log(data)
		}
	});
});

//Function to Save Info
var storeData = function(data){
	key = $("#save").data("key");
	if (!key) {
		var id = Math.floor(Math.random() * 1000005);
	} else {
		var id = key;
        }
	var item = {};
		item.title = ["Title:", $("#title").val()];;
		item.selection = data[1].value;
		item.name = data[2].value;
		item.dateLoaned = data[3].value;
		item.loantime = data[4].value;
		item.reminder = data[5].value;
		//Trouble with checkbox here, if checked, returns as on, if not, returns as save info
                console.log(item)
                
		
		//Where code is set to local storage
		localStorage.setItem(id, JSON.stringify(item));
		//$(this).reload();
                alert("Information has been saved!");
                $.mobile.changePage("#home", { transition: "slidedown"});
};

//Functions for View Stored
$("#view").on("pageinit", function(){
        //Get Data Call
        getData();        
        //Clear function call
        $("#clearAll").on("click", clearData);
});

var getData = function(){
        if (localStorage.length === 0) {
                //alert("No records found. Test items added.");
                //autoFillData();
               // window.location.reload()
                alert("No records found!")
                return false;
                } else {

    for (var i = 0, j = localStorage.length; i < j; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
    }

$("<div>").attr({"class": "itemInfoDetails"}).appendTo("#itemsDataLoc");
console.log(value)
var info = JSON.parse(value);

        $("<li>").html("Title: " + info.title).appendTo(".itemInfoDetails");
        $("<li>").html("Item Type: " + info.selection).appendTo(".itemInfoDetails");
        $("<li>").html("Name: " + info.name).appendTo(".itemInfoDetails");
        $("<li>").html("Date: " + info.dateLoaned).appendTo(".itemInfoDetails");
        $("<li>").html("Loan Time: " + info.loantime).appendTo(".itemInfoDetails");
        $("<li>").html("Reminder: " + info.reminder).appendTo(".itemInfoDetails");        
//edit/delete buttons

$("<button>").html($("<a>").attr({"href": "#" }).html("Delete Item")).appendTo(".itemInfoDetails");
//$("#delete").on("click", deleteItem(key));
$("<button>").html($("<a>").attr({"href": "#add"}).html("Edit Item")).appendTo(".itemInfoDetails");

$("<hr>").html("").appendTo(".itemInfoDetails");
}
}      				
//Function to clear all stored, only located on #view                                       
var clearData = function(){
	if (localStorage.length === 0) {
			alert("You have no items stored!");
		} else {
			localStorage.clear();
			alert("All information has been cleared!");
			$.mobile.changePage("#home", { transition: "slidedown"});
			return false;
			}
};

//Function to Delete Single Items
function deleteItem() {
            var checkDel = confirm("Are you sure you want to remove this item?");
            var key = localStorage.key;
            if (checkDel) {
            localStorage.removeItem(key);
            alert("Item Deleted");
            window.location.reload();
            } else {
            return false;
}
}
 
 

 function editItem(key) {
            var value = localStorage.getItem(this.key);
            var info = JSON.parse(value);
                    
            $("#title").val = info.title[1];
            $("#selection").value = info.selection[1];
            $("#name").value = info.name[1];
            $("#dateLoaned").value = info.dateLoaned[1];
            $("#loantime").value = info.loantime[1];
            $("#reminder").value = info.reminder[1];
           
            isItChecked = localStorage.getItem(reminder);
            console.log(info.reminder[1])

            if (info.reminder[1] === true) {
                reminder.checked = true
            } else {
                console.log("its not checked");
            }

            $("#save").value = "Save Changes";
            var editSubmit = $("#save");
            
            editSubmit.key = this.key;
        }

//Old function of autoPop replaced with autoFillData  
var autoFillData = function (){
	for (var n in json) {
            var itemID = Math.floor(Math.random() * 1000005);
            localStorage.setItem(itemID, JSON.stringify(json[n]));
        }
};