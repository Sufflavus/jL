(function() {
    var customers = getCustomerList(); 

    var allButFirst2Orders = jL.fromArray(customers)
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
                               .skip(2)
                               .toArray();

    console.log("All but first 2 orders in WA:"); 

    allButFirst2Orders.forEach(function(order) {
        console.log("CustomerID=" + order.customerId + " OrderID=" + order.orderId + " OrderDate=" + order.orderDate);
    });
})();
