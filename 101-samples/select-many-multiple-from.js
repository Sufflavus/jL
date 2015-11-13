(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js

    var cutoffDate = new Date(1997, 0, 1); 
  
    var collectionSelector = function (customer) {
        return jLinq.fromArray(customer.orders)
                    .where(function(order) { 
                        return order.orderDate.getTime() >= cutoffDate.getTime(); 
                    })
                    .toArray();
    };
  
    var resultSelector = function(customer, order) {
        return {
            customerId: customer.customerId, 
            orderId: order.orderId
        };
    };

    var result = jLinq.fromArray(customers)
                      .where(function (customer) {
                          return customer.region === "WA";
                      })
                      .selectMany(collectionSelector, resultSelector)
                      .toArray();

    result.forEach(function(item) {
        console.log("CustomerID=" + item.customerId + " OrderID=" + item.orderId);
    });
})();
