var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// instance of class
var myCustomer = new Customer("Brenda", "Moran");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
