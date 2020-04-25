function(doc) {
  if (doc.title !== 0) {
    emit(doc.title, {
    "title": doc.title,
    "name" : doc.name,
    "date" : doc.date,
	"loantime" : doc.loantime,
	"reminder" : doc.reminder,
	"selection": doc.selection
    });
  }
};