import Customer from '../../entities/customer';

export default interface CustomerRepository extends Repository<Customer> {
  getCustomerById(lineItemId: string): Promise<Customer>;
  getCustomerByDocument(lineItemId: string): Promise<Customer>;
}