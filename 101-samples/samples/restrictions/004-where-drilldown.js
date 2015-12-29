(function() {
    var customers = getCustomerList(); 

    var waCustomers = jL.fromArray(customers)
                        .where(function(c){
                            return c.Region == "WA";
                        }).toArray();

    console.log("Customers from Washington and their orders:"); 

    waCustomers.forEach(function(customer) {
        console.log("Customer " + customer.CustomerId + ": " + customer.CompanyName); 
        customer.Orders.forEach(function(order) {
            console.log("  Order " + order.OrderId + ": " + order.OrderDate); 
        });
    });
})();
