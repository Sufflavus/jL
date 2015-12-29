(function() {
    var words = ["aPPLE", "BlUeBeRrY", "cHeRry"];

    var upperLowerWords = jL.fromArray(words)
                            .select(function(w){
                                return { 
                                    upper: w.toUpperCase(), 
                                    lower: w.toLowerCase() 
                                };
                            }).toArray();

    upperLowerWords.forEach(function(item) {
        console.log("Uppercase: " + item.upper + ", Lowercase: " + item.lower);
    });
})();
