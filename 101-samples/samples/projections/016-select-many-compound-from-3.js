(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js

    var collectionSelector = function (customer) {
        return jL.fromArray(customer.Orders)
                 .where(function(order) { 
                     return (new Date(order.OrderDate)).getTime() >= (new Date(1998, 0, 1)).getTime(); 
                 })
                 .toArray();
    };
  
    var resultSelector = function(customer, order) {
        return {
            customerId: customer.CustomerId, 
            orderId: order.OrderId,
            orderDate: order.OrderDate
        };
    };

    var result = jL.fromArray(customers)
                   .selectMany(collectionSelector, resultSelector)
                   .toArray();

    result.forEach(function(item) {
        console.log("CustomerID=" + item.customerId + " OrderID=" + item.orderId + " OrderDate=" + item.orderDate);
    });
})();
