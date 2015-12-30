(function() {
    var customers = getCustomerList(); 

    var first3WAOrders = jL.fromArray(customers)
               .where(function(customer){
                    return customer.Region === "WA";
                })
               .selectMany(function(customer) {
                    return customer.Orders;
                }, function(customer, order) {
                    return {
                        customerId: customer.CustomerId, 
                        orderId: order.OrderId,
                        orderDate: order.OrderDate
                    };
                })
               .take(3)
               .toArray();

    console.log("First 3 orders in WA:"); 

    first3WAOrders.forEach(function(order) {
        console.log("CustomerID=" + order.customerId + " OrderID=" + order.orderId + " OrderDate=" + order.orderDate);
    });
})();
