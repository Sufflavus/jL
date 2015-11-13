(function() {    
    var customers = getCustomerList(); 
      
    var collectionSelector = function (customer) {
        return jLinq.fromArray(customer.orders)
                    .where(function(order) { 
                        return order.total < 500; 
                    })
                    .toArray();
    };
  
    var resultSelector = function(customer, order) {
        return {
            customerId: customer.customerId, 
            orderId: order.orderId,
            total: order.total
        };
    };

    var result = jLinq.fromArray(customers)
                      .selectMany(collectionSelector, resultSelector)
                      .toArray();

    result.forEach(function(item) {
        console.log("CustomerID=" + item.customerId + " OrderID=" + item.orderId + " Total=" + item.total);
    });


    function getCustomerList() {
        return [
        {
            customerId: "ALFKI",
            orders: [
            {
                orderId: 10702,
                total: 330.00,
                orderDate: new Date(1998, 11, 20)
            },
            {
                orderId: 10952,
                total: 471.20,
                orderDate: new Date(1997, 10, 2)
            },
            {
                orderId: 10964,
                total: 671.20,
                orderDate: new Date(1998, 2, 15)
            }]
        },
        {
            customerId: "ANATR",
            orders: [
            {
                orderId: 10308,
                total: 88.80,
                orderDate: new Date(1999, 11, 20)
            },
            {
                orderId: 10625,
                total: 479.75,
                orderDate: new Date(1998, 8, 10)
            },
            {
                orderId: 10678,
                total: 891.20,
                orderDate: new Date(1996, 11, 20)
            },
            {
                orderId: 10759,
                total: 320.00,
                orderDate: new Date(1995, 1, 12)
            }]
        },
        {
            customerId: "ANTON",
            orders: [
            {
                orderId: 10259,
                total: 991.00,
                orderDate: new Date(1998, 7, 13)
            },
            {
                orderId: 10365,
                total: 403.20,
                orderDate: new Date(1998, 9, 11)
            },
            {
                orderId: 10573,
                total: 2082.00,
                orderDate: new Date(1998, 5, 1)
            },
            {
                orderId: 10682,
                total: 375.50,
                orderDate: new Date(1996, 4, 16)
            }]
        },
        {
            customerId: "AROUT",
            orders: [
            {
                orderId: 10355,
                total: 480.00,
                orderDate: new Date(1998, 0, 13)
            },
            {
                orderId: 10453,
                total: 407.70,
                orderDate: new Date(1998, 1, 11)
            },
            {
                orderId: 10558,
                total: 2142.90,
                orderDate: new Date(1998, 2, 11)
            },
            {
                orderId: 10741,
                total: 228.00,
                orderDate: new Date(1998, 3, 1)
            },
            {
                orderId: 10743,
                total: 319.20,
                orderDate: new Date(1996, 4, 16)
            },
            {
                orderId: 10793,
                total: 191.10,
                orderDate: new Date(1996, 5, 16)
            },
            {
                orderId: 10864,
                total: 282.00,
                orderDate: new Date(1996, 6, 16)
            },
            {
                orderId: 10920,
                total: 390.00,
                orderDate: new Date(1996, 7, 16)
            },
            {
                orderId: 10953,
                total: 4441.25,
                orderDate: new Date(1996, 8, 16)
            },
            {
                orderId: 11016,
                total: 491.50,
                orderDate: new Date(1996, 9, 16)
            }]
        }];
    }
})();
