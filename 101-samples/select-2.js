(function() {
    var products = getProductList(); 
  
    var productNames = function(p){
        return p.productName;
    }

    console.log("Product Names:");
    
    var result = jLinq.fromArray(products).select(productNames).toArray();

    result.forEach(function(item) {
        console.log(item);
    });

    function getProductList() {
        return [
            { productName: "Chai" }, 
            { productName: "Chang" },
            { productName: "Aniseed Syrup" },
            { productName: "Chef Anton's Cajun Seasoning" },
            { productName: "Chef Anton's Gumbo Mix" },
        ];
    }
})();
