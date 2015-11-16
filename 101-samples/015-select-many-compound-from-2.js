(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js
      
    var collectionSelector = function (customer) {
        return jL.fromArray(customer.orders)
                 .where(function(order) { 
                     return order.total < 500; 
                 })
                 .toArray();
    };
  
    var resultSelector = function(customer, order) {
        return {
            customerId: customer.customerId, 
            orderId: order.orderId,
            total: order.total
        };
    };

    var result = jL.fromArray(customers)
                   .selectMany(collectionSelector, resultSelector)
                   .toArray();

    result.forEach(function(item) {
        console.log("CustomerID=" + item.customerId + " OrderID=" + item.orderId + " Total=" + item.total);
    });
})();
