import Customer from "./Customer";
import Guest from "./Guest";

export default interface Person {
  id: number;
  customer: Customer;
  guest: Guest;
}
