(function() {
    var products = getProductList(); // function getProductList is in the file datacontext.js
  
    console.log("Product Names:");
    
    var result = jL.fromArray(products)
                   .select(function(p){
                       return p.ProductName;
                   }).toArray();

    result.forEach(function(item) {
        console.log(item);
    });
})();
