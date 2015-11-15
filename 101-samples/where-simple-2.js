(function() {
    var products = getProductList(); 

    var soldOutProducts = function(p){
        return p.unitsInStock === 0;
    };

    var result = jLinq.fromArray(products).where(soldOutProducts).toArray();

    console.log("Where - Simple 2"); 

    console.log("Sold out products:"); 

    result.forEach(function(item) {
        console.log(item.productName + " is sold out!");
    });

    console.log("-----------------"); 
})();
