function(doc) {
  if (doc._id !== 0) {
    emit(doc._id, {
    "title": doc.title,
    "name" : doc.name,
    "date" : doc.date,
	"loantime" : doc.loantime,
	"reminder" : doc.reminder
    });
  }
};