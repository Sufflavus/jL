(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js
  
    var collectionSelector = function (customer, customerIndex) {
        return jL.fromArray(customer.orders)
                 .select(function(order) { 
                     return "Customer #" + (customerIndex + 1) + 
                            " has an order with OrderID " + order.orderId; 
                 })
                 .toArray();
    };
  
    var result = jL.fromArray(customers)
                   .selectMany(collectionSelector)
                   .toArray();

    result.forEach(function(item) {
        console.log(item);
    });
})();
