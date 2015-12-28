(function() {
    var products = getProductList(); 

    var result = jL.fromArray(products)
                   .where(function(p){
                       return p.unitsInStock === 0;
                   }).toArray();

    console.log("Sold out products:"); 

    result.forEach(function(item) {
        console.log(item.productName + " is sold out!");
    });
})();
