var mapFunction = function() {
	var key = this.word.split("").sort().join("");
	var value = this.word;
	emit(key, value);
}

var reduceFunction = function(keySorted, nameVals) {
	var count = 0;
	var joinedVals = "";
	nameVals.forEach( function(val){
		count += 1;
		joinedVals += val + ", "
	});
	joinedVals = joinedVals.substring(0, joinedVals.length - 2);

	return {
		count: count,
		anagrams: joinedVals
	};
}

db.wordlist.mapReduce( mapFunction, reduceFunction, {
	out: "anagramList"
})

var res = db.anagramList.find()

res.forEach( function(anagram) {
	if(anagram.value.count !== undefined){
		print(anagram.value.anagrams);
	} 
});