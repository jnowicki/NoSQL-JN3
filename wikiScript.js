var map = function() {
	try{
		this.pierwsza.split(" ").forEach(function(entry) {
			emit(entry, 1);
		});
	} catch (e){
		
	}
}
var reduce = function(key, values) {
	var cnt = 0;
	values.forEach(function(v) {
		cnt += 1
	});
	return {
		count : cnt
	};
}

db.words.mapReduce(map, reduce, {
	out : "wikiCount"
});