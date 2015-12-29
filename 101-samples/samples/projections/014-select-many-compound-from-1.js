(function() {
    var numbersA = [0, 2, 4, 5, 6, 8, 9]; 
    var numbersB = [1, 3, 5, 7, 8]; 
  
    var pairs = jL.fromArray(numbersA)
                  .selectMany(function(a) {
                       return numbersB.filter(function(b) {
                           return a < b; 
                       });
                   }, function(a, b) {
                       return {
                           a: a, 
                           b: b
                       };
                   })
                  .toArray();

    console.log("Pairs where a < b:");

    pairs.forEach(function(item) {
        console.log(item.a + " is less than " + item.b);
    });

})();
