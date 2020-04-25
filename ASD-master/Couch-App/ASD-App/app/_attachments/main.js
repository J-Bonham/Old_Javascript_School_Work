
//Jeremiah Bonham ASD 1311
//Week 4 re-write to add couch functionality

//Home Page
$(document).on("pageinit", "#home", function() {
    //Pulling Category for links
    $.couch.db("asdproj").view("app/Type", {
        success: function(data) {
        //console.log(data);

            $("#linkList").empty();
            $.each(data.rows, function(index, value){
                var itemType = (value.value || value.doc);
                $("#linkList").append($("<li>").append($("<a>")
                .attr("href", "#" + itemType.key).text(itemType.key))   
                );
            });
            $("#linkList").listview("refresh");
        }
    });


        //Calling Book View
        $(document).on("pageinit", "#Book", function(){
            $.ajax({
                "url":"_view/Book",
                "dataType":"json",
                "success": function(data) {
                
                    $.each(data.rows, function(index, book) {
                        var title = book.value.title;
                        
                        $("#browsebooklist").append(
                        $("<li>").append(
                        $("<a>").attr("href", "#browse").text(title.slice(1))));});

                $("#browsebooklist").listview("refresh");   
                }
            });
        }); 


        //Calling Movie View
        $(document).on("pageinit", "#Movie", function(){
            $.ajax({
                    "url":"_view/Movie",
                    "dataType":"json",
                    "success": function(data) {
                    
                        $.each(data.rows, function(index, movie) {
                            var title = movie.value.title;
                            
                            $("#browsemovielist").append(
                            $("<li>").append(
                            $("<a>").attr("href", "#browse").text(title.slice(1))));});

                    $("#browsemovielist").listview("refresh");  
                    }
                });
        });

         
         //Calling Game View   
        $(document).on("pageinit", "#Game", function(){
            $.ajax({
                "url":"_view/Game",
                "dataType":"json",
                "success": function(data) {
                console.log(data)
                    $.each(data.rows, function(index, game) {
                        var title = game.value.title;
                        
                        $("#browsegamelist").append(
                        $("<li>").append(
                        $("<a>").attr("href", "#browse").text(title.slice(1))));});

                $("#browsegamelist").listview("refresh");   
                }
            });

        });
});


//Browse Page to display data
$(document).on("pageinit", "#browse", function() {  

    $.couch.db("asdproj").view("app/browse", { 
        success: function(data) {  
            
                $.each(data.rows, function (index, value) {  
                var item = value.value;
                var title = item.title;
                var name = item.name;
                var date = item.date;
                var loantime = item.loantime;
                var key = item.id;
                var rev = item.rev;

                $("<div>" + 
                    "<h3>" + title + "</h3>" +
                    "<p>" + name + "</p>" +
                    "<p>" + date + "</p>" +
                    "<p>" + loantime + "</p>" +  
                    "<button id='edit'><a href = '#add'> Edit Item </a> </button>" + 
                    "<button id='delete'> Delete Item </button>" +
                    "<hr>" + "</div>"
                    ).appendTo("#browseinfo");
            });           
        $("#browseinfo").listview("refresh");
        $("#delete").click(deleteItem);
        $("#edit").click(editItem);
        }

    });
   
   //Edit

           var editItem =  function() {
                var itemId = $(this).data("#key");
                var revNum = $(this).data("#rev");
                $.couch.db("asdproj").openDoc(id, {
                    success: function(value) {
                        var title = value.title;
                        var selection = value.selection;
                        var name = value.name;
                        var loandate = value.loandate;
                        var loanlength = value.loanlength;

                            $("#key").val(itemId);
                            $("#rev").val(revNum);

                            $("#title").val(title);
                            $("#selection").val(selection);
                            $("#name").val(name);
                            $("#loandate").val(loandate);
                            $("#loanlength").val(loanlength);
                    

                    },
                    error: function() {
                       
                    }
                });


            };


   //Delete
    var deleteItem = function() {  
        var itemID = $(this).data("#key");
        var revNum = $(this).data("#rev");
        var deletedItem = {};
            deletedItem._id = itemID;
            deletedItem._rev = revNum;
                var checkDel = confirm("Are you sure you want to remove this item?");
                    if (checkDel) {
                        $.couch.db("asdproj").removeDoc(deletedItem, {
                            success: function() {
                                alert("Item Deleted")
                            },
                            error: function() {
                            }
                        })


                    }



} 

});

//Add Page

$(document).on("pageinit", "#add", function() {

    var myForm = $("#addForm");
    myForm.validate({
        
    invalidHandler: function(form, validator) {},
    submitHandler: function() {
        var data = myForm.serializeArray();
        storeData(data);
        window.location.reload();
        }
    });

    //Store Data - Trouble in this Function
    var storeData = function(data) {

        var itemInfo = {}
        if ($("key").val() == "") {

        } else {
            itemInfo._id = $("#key").val();
            itemInfo._rev = $("#rev").val();
        }

        itemInfo.title = data[0].value;
        itemInfo.selection = data[1].value;
        itemInfo.name = data[2].value;
        itemInfo.date = data[3].value;
        itemInfo.loanlength = data[4].value;
        console.log(data)


            $.couch.db("asdproj").saveDoc(itemInfo, {
                success: function() {
                },
                error: function() {                   
                }        
            });
            
            //localStorage.setItem(itemID, JSON.stringify(info));
            alert("Information has been saved!");
        
    };
});

