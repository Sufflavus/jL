(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var numsInPlace = function(num, index){
        return { 
            num: num, 
            inPlace: (num === index)
        };
    }

    var result = jLinq.fromArray(numbers).select(numsInPlace).toArray();

    console.log("Number: In-place?"); 
    result.forEach(function(item) {
        console.log(item.num + ": " + item.inPlace);
    });
})();
