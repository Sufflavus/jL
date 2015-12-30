(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];     

    var firstNumbersLessThan6 = jL.fromArray(numbers)
                                  .takeWhile(function(n){
                                      return n < 6;
                                  }).toArray();

    console.log("First numbers less than 6:"); 

    firstNumbersLessThan6.forEach(function(n) {
        console.log(n);
    });
})();
