(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];   
    
    var result = jL.fromArray(numbers)
                   .select(function(n){
                       return n + 1;
                   }).toArray();

    result.forEach(function(item) {
        console.log(item);
    });
})();
