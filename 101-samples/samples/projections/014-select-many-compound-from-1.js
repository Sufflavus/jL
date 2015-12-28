(function() {
    var numbersA = [0, 2, 4, 5, 6, 8, 9]; 
    var numbersB = [1, 3, 5, 7, 8]; 
  
    var collectionSelector = function (a) {
        return jL.fromArray(numbersB)
                 .where(function(b) { 
                     return a < b; 
                 })
                 .toArray();
    };
  
    var resultSelector = function(a, b) {
        return {
            a: a, 
            b: b
        };
    };

    var result = jL.fromArray(numbersA)
                   .selectMany(collectionSelector, resultSelector)
                   .toArray();

    console.log("Pairs where a < b:");

    result.forEach(function(item) {
        console.log(item.a + " is less than " + item.b);
    });

})();
