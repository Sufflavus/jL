(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js

    var cutoffDate = new Date(1997, 0, 1); 
  
    var collectionSelector = function (customer) {
        return jL.fromArray(customer.Orders)
                 .where(function(order) { 
                     return order.OrderDate.getTime() >= cutoffDate.getTime(); 
                 })
                 .toArray();
    };
  
    var resultSelector = function(customer, order) {
        return {
            customerId: customer.CustomerId, 
            orderId: order.OrderId
        };
    };

    var result = jL.fromArray(customers)
                   .where(function (customer) {
                       return customer.region === "WA";
                   })
                   .selectMany(collectionSelector, resultSelector)
                   .toArray();

    result.forEach(function(item) {
        console.log("CustomerID=" + item.customerId + " OrderID=" + item.orderId);
    });
})();