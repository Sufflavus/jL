(function() {
    var products = getProductList(); 
    
    var productInfos = function(p){
        return { 
            productName: p.productName, 
            category: p.category,
            unitPrice: p.unitPrice
        };
    }

    var result = jLinq.fromArray(products).select(productInfos).toArray();

    console.log("Product Info:"); 
    
    result.forEach(function(item) {
        console.log(item.productName + " is in the category " + item.category + " and costs " + item.unitPrice + " per unit.");
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
