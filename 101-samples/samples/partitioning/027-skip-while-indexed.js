(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var laterNumbers = jL.fromArray(numbers)
                         .skipWhile(function(n, index){
                             return n >= index;
                         }).toArray();

    console.log("All elements starting from first element less than its position:"); 

    laterNumbers.forEach(function(n) {
        console.log(n);
    });
})();
