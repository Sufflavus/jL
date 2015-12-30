(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var first3Numbers = jL.fromArray(numbers)
                          .take(3)
                          .toArray();

    console.log("First 3 numbers:"); 

    first3Numbers.forEach(function(n) {
        console.log(n);
    });
})();
