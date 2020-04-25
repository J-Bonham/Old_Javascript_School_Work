function(doc) {
  if (doc._id.substr(0, 5) === "Game:") {
    emit(doc._id, {
   "id": doc._id,
   "title": doc.title,
    "name" : doc.name,
    "date" : doc.date,
	"loantime" : doc.loantime,
	"reminder" : doc.reminder
    });
  }
};