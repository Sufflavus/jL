(function() {
    var products = getProductList(); // function getProductList is in the file datacontext.js
  
    var productNames = function(p){
        return p.productName;
    }

    console.log("Product Names:");
    
    var result = jLinq.fromArray(products).select(productNames).toArray();

    result.forEach(function(item) {
        console.log(item);
    });
})();
