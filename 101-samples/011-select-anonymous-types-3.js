(function() {
    var products = getProductList(); // function getProductList is in the file datacontext.js
    
    var result = jL.fromArray(products)
                   .select(function(p){
                       return { 
                           productName: p.productName, 
                           category: p.category,
                           unitPrice: p.unitPrice
                       };
                   }).toArray();

    console.log("Product Info:"); 
    
    result.forEach(function(item) {
        console.log(item.productName + " is in the category " + item.category + " and costs " + item.unitPrice + " per unit.");
    });
})();
