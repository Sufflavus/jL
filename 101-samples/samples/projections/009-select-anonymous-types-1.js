(function() {
    var words = ["aPPLE", "BlUeBeRrY", "cHeRry"];

    var result = jL.fromArray(words)
                   .select(function(w){
                       return { 
                           upper: w.toUpperCase(), 
                           lower: w.toLowerCase() 
                       };
                   }).toArray();

    result.forEach(function(item) {
        console.log("Uppercase: " + item.upper + ", Lowercase: " + item.lower);
    });
})();
