(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js

    var orders = jL.fromArray(customers)
                   .selectMany(function(customer) {
                        return customer.Orders.filter(function(order) {
                            return (new Date(order.OrderDate)).getTime() >= (new Date(1998, 0, 1)).getTime(); 
                        });
                    }, function(customer, order) {
                        return {
                            customerId: customer.CustomerId, 
                            orderId: order.OrderId,
                            orderDate: order.OrderDate
                        };
                    })
                   .toArray();

    orders.forEach(function(item) {
        console.log("CustomerID=" + item.customerId + " OrderID=" + item.orderId + " OrderDate=" + item.orderDate);
    });
})();
