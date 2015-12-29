(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js
  
    var orders = jL.fromArray(customers)
                   .selectMany(function(customer, customerIndex) {
                        return customer.Orders.filter(function(order) {
                            return "Customer #" + (customerIndex + 1) + 
                                " has an order with OrderID " + order.OrderId; 
                        });
                    })
                   .toArray();

    orders.forEach(function(item) {
        console.log(item);
    });
})();
