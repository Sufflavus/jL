(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var allButFirst3Numbers = jL.fromArray(numbers)
                                .skipWhile(function(n){
                                    return n % 3 != 0;
                                }).toArray();

    console.log("All elements starting from first element divisible by 3:"); 

    allButFirst3Numbers.forEach(function(n) {
        console.log(n);
    });
})();
