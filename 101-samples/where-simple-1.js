(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
  
    var lowNums = function(n){
        return n < 5;
    };

    var result = jLinq.fromArray(numbers).where(lowNums).toArray();

    console.log("Where - Simple 1"); 

    console.log("Numbers < 5:"); 

    result.forEach(function(item) {
        console.log(item);
    });

    console.log("-----------------"); 
})();
