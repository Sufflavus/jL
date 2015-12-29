(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js

    var cutoffDate = new Date(1997, 0, 1); 
  
    var orders = jL.fromArray(customers)
                   .selectMany(function(customer) {
                        return customer.Orders.filter(function(order) {
                            return new Date(order.OrderDate).getTime() >= cutoffDate.getTime(); 
                        });
                    }, function(customer, order) {
                        return {
                            customerId: customer.CustomerId, 
                            orderId: order.OrderId
                        };
                    })
                   .toArray();

    orders.forEach(function(item) {
        console.log("CustomerID=" + item.customerId + " OrderID=" + item.orderId);
    });
})();
