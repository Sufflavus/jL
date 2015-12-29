(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    var strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 

    console.log("Number strings:");

    var textNums = jL.fromArray(numbers)
                     .select(function(n){
                         return strings[n];
                     }).toArray();

    textNums.forEach(function(item) {
        console.log(item);
    });
})();
