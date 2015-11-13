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
            {
                id: 1,
                productName: "Chai",
                category: "Beverages",
                unitPrice: "18.0000"
            },
            {
                id: 2,
                productName: "Chang",
                category: "Beverages",
                unitPrice: "19.0000"
            },
            {
                id: 3,
                productName: "Aniseed Syrup",
                category: "Condiments",
                unitPrice: "10.0000"
            },
            {
                id: 4,
                productName: "Chef Anton's Cajun Seasoning",
                category: "Condiments",
                unitPrice: "22.0000"
            },
            {
                id: 5,
                productName: "Chef Anton's Gumbo Mix",
                category: "Condiments",
                unitPrice: "21.3500"
            },
        ]
    }    
})();
