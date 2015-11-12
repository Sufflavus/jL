(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
  
    var numsPlusOne = function(n){
        return n + 1;
    }
    
    var result = jLinq.fromArray(numbers).select(numsPlusOne).toArray();

    result.forEach(function(item) {
        console.log(item);
    });
})();
