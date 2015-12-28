(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var result = jL.fromArray(numbers)
                   .select(function(num, index){
                       return { 
                           num: num, 
                           inPlace: (num === index)
                       };
                   }).toArray();

    console.log("Number: In-place?"); 
    
    result.forEach(function(item) {
        console.log(item.num + ": " + item.inPlace);
    });
})();
