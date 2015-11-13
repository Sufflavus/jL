(function() {
    var words = ["aPPLE", "BlUeBeRrY", "cHeRry"];

    var upperLowerWords = function(w){
        return { 
            upper: w.toUpperCase(), 
            lower: w.toLowerCase() 
        };
    }

    var result = jLinq.fromArray(words).select(upperLowerWords).toArray();

    result.forEach(function(item) {
        console.log("Uppercase: " + item.upper + ", Lowercase: " + item.lower);
    });
})();
