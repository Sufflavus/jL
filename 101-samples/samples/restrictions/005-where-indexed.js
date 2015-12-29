(function() {
    var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 
    
    var shortDigits = jL.fromArray(digits)
                        .where(function(digit, index){
                            return digit.length < index;
                        }).toArray();
    
    console.log("Short digits:"); 

    shortDigits.forEach(function(d) {
        console.log("The word " + d + " is shorter than its value."); 
    });
})();
