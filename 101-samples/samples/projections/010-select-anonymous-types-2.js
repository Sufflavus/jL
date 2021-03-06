(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    var strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 

    var digitOddEvens = jL.fromArray(numbers)
                          .select(function(n){
                              return { 
                                  digit: strings[n], 
                                  even: (n % 2 === 0) 
                              };
                          }).toArray();

    digitOddEvens.forEach(function(item) {
        console.log("The digit " + item.digit + " is " + (item.even ? "even" : "odd"));
    });
})();
