(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js

    var orders = jL.fromArray(customers)
                   .selectMany(function(customer) {
                        return customer.Orders.filter(function(order) {
                            return order.Total < 500;
                        });
                    }, function(customer, order) {
                        return {
                            customerId: customer.CustomerId, 
                            orderId: order.OrderId,
                            total: order.Total
                        };
                    })
                   .toArray();

    orders.forEach(function(item) {
        console.log("CustomerID=" + item.customerId + " OrderID=" + item.orderId + " Total=" + item.total);
    });
})();
