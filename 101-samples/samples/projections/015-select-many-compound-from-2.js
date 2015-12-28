(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js
      
    var collectionSelector = function (customer) {
        return jL.fromArray(customer.Orders)
                 .where(function(order) { 
                     return order.Total < 500; 
                 })
                 .toArray();
    };
  
    var resultSelector = function(customer, order) {
        return {
            customerId: customer.CustomerId, 
            orderId: order.OrderId,
            total: order.Total
        };
    };

    var result = jL.fromArray(customers)
                   .selectMany(collectionSelector, resultSelector)
                   .toArray();

    result.forEach(function(item) {
        console.log("CustomerID=" + item.customerId + " OrderID=" + item.orderId + " Total=" + item.total);
    });
})();
