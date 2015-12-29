(function() {
    var products = getProductList(); 

    var soldOutProducts = jL.fromArray(products)
                   .where(function(p){
                       return p.UnitsInStock === 0;
                   }).toArray();

    console.log("Sold out products:"); 

    soldOutProducts.forEach(function(item) {
        console.log(item.ProductName + " is sold out!");
    });
})();
