function(doc) {
  if (doc._id.substr(0, 6) === "Movie:") {
    emit(doc._id,{
    "title": doc.title,
    "name" : doc.name,
    "date" : doc.date,
	"loantime" : doc.loantime,
	"reminder" : doc.reminder
      
    
    });
  }
};