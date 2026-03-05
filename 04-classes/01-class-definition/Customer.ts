class Customer {
  firstName: string;
  lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

// instance of class
let myCustomer = new Customer("Brenda", "Moran");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);


