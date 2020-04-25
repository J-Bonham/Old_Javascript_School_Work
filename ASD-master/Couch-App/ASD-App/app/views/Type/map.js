function(doc) {
if (doc.itemType === "Catagory") {
      emit(doc.itemType, {
    "itemType": doc.itemType,
    "key" : doc.key
   
    });
  }
};