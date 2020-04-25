// Jeremiah Bonham ASD 1311
// Week 3
// Reworking line by line to correct week 2

// Functions for Home
// No current functions on main page
$("#home").on("pageinit", function(){
});

//Functions for Add Item Page
// Saving to local storage as object correctly
$("#add").on("pagebeforeshow", function(){
	var myForm = $("#addForm");
	//need to reset forms
	myForm.validate({
	invalidHandler: function(form, validator) {
	},
	submitHandler: function() {
		var data = myForm.serializeArray();
		storeData(data);
		}
	});
});
/*
function resetForm(data) {
	$("#myForm")[0].reset();
	}
*/


//Function to Save Info
var storeData = function(data){
	// if (!key) {
		itemID = Math.floor(Math.random() * 1000005);
	// } else {
	// 	itemID = key;
 //    }
	
	var item = {};
	item.title = $("#title").val();
	item.selection = $("#selection").val();
	item.name = $("#name").val();
	item.dateLoaned = $("#dateLoaned").val();
	item.loantime = $("#loantime").val();
	item.reminder = $("#reminder").val();
		
	localStorage.setItem(itemID, JSON.stringify(item));	
	alert("Information has been saved!");
	
	//resetForm();
	$.mobile.changePage("#home");

}

$("#save").on("click", storeData);
$("#save").off("click");


//Functions for View Stored
//$("#view").on("pageinit", function(){
$("#view").on("pagebeforeshow", function(){
        //Get Data Call
        $("#itemsDataLoc").children().remove();
        getData();        
        //Clear function call
        $("#clearAll").click(clearData);
});

//Functions for Auto Fill
 function autoPop() {
        for (var n in json) {
            var itemID = Math.floor(Math.random() * 1000005);
            localStorage.setItem(itemID, JSON.stringify(json[n]));
	}
 };

//Function to clear all stored                                     
var clearData = function(){
	if (localStorage.length === 0) {
		alert("You have no items stored!");
	} else {
		localStorage.clear();
		
		$("#itemsDataLoc").children().remove();
		
		localStorage.clear();
		
		alert("All information has been cleared!");
		$.mobile.changePage("#home", { transition: "slidedown"});
		return false;
		}
};



var getData = function(){
    if (localStorage.length === 0) {
		alert("No items found. Test items added.");
		autoPop();
    } 

	var container = $("#itemsDataLoc").addClass('itemInfoDetails');

	for ( var i = 0; i < localStorage.length; i++ ) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var item = JSON.parse(value);

		var builder = '<ul key="'+ key+ '"">';
		builder += '<li class="itemInfoDetails">' + '<h2>' + item.title + '<h2>' + '</li>';
		builder += '<li class="itemInfoDetails">' + "Item Type:   "+ item.selection + '</li>';
		builder += '<li class="itemInfoDetails">' + "Borrower's Name:   "+ item.name + '</li>';
		builder += '<li class="itemInfoDetails">' + "Date Loaned:   "+ item.dateLoaned + '</li>';
		builder += '<li class="itemInfoDetails">' + "Length of Loan:   "+ item.loantime + '</li>';
		builder += '<li class="itemInfoDetails">' + "Reminder Sent:   "+ item.reminder + '</li>';
		builder += '<li class="itemInfoDetails">' + '<button><a href="#delete">Delete</a></button>';
		builder += '<button><a href="#edit">Edit</a></button>' + '</li>';
		builder += '</ul>';
		builder += '<hr/>';
		container.append(builder);
	}	
	buttonListeners();
}

function buttonListeners() {
	$("button").click( function(e) {
		var key = $(this).prev().attr("key");
		var type = $(this).find("a").attr("href");
		if (type === "#delete") {
			deleteItem(key);
		} else if(type === "#edit") {
			editItem(key)
		}
	});
}
	
// delete

var deleteItem =  function (key) {
				var confirmDelete = confirm("Are you sure you want to delete this item?");
				if (confirmDelete === true) {
					localStorage.removeItem(this.key);
					alert("Item Deleted");
					
					$.mobile.changePage("#home");
					return false;
	
				} else {
					alert("Item was not deleted");
				}
			};
			
