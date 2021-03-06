(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 
     
    var lowNums = jL.fromArray(numbers)
                    .where(function(n){
                        return n < 5;
                    }).select(function(n){
                        return digits[n];
                    }).toArray();

    console.log("Numbers < 5:");

    lowNums.forEach(function(item) {
        console.log(item);
    });
})();
