(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js

    var collectionSelector = function (customer) {
        return jLinq.fromArray(customer.orders)
                    .where(function(order) { 
                        return order.orderDate.getTime() >= (new Date(1998, 0, 1)).getTime(); 
                    })
                    .toArray();
    };
  
    var resultSelector = function(customer, order) {
        return {
            customerId: customer.customerId, 
            orderId: order.orderId,
            orderDate: order.orderDate
        };
    };

    var result = jLinq.fromArray(customers)
                      .selectMany(collectionSelector, resultSelector)
                      .toArray();

    result.forEach(function(item) {
        console.log("CustomerID=" + item.customerId + " OrderID=" + item.orderId + " OrderDate=" + item.orderDate);
    });
})();
