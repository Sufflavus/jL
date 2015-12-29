(function() {
    var products = getProductList(); // function getProductList is in the file datacontext.js
    
    var productInfos = jL.fromArray(products)
                         .select(function(p){
                             return { 
                                 productName: p.ProductName, 
                                 category: p.Category,
                                 unitPrice: p.UnitPrice
                             };
                         }).toArray();

    console.log("Product Info:"); 
    
    productInfos.forEach(function(item) {
        console.log(item.productName + " is in the category " + item.category + " and costs " + item.unitPrice + " per unit.");
    });
})();
