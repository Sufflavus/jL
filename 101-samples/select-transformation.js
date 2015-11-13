(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    var strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 

    var textNums = function(n){
        return strings[n];
    }

    console.log("Number strings:");

    var result = jLinq.fromArray(numbers).select(textNums).toArray();

    result.forEach(function(item) {
        console.log(item);
    });
})();
