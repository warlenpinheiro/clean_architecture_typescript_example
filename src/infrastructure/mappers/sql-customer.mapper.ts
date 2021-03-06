import SQLMapper from './sql-mapper';
import { Customer, UniqueEntityID,  Address } from '@entities';

export default class SqlCustomerMapper extends SQLMapper {
  constructor(db: any) {
    const dbName = 'store';
    const modelName = 'customer';
    super(dbName, modelName, db);
  }

  public toDomain(customerRowDTO: any): Customer {
    const address = Address.build(customerRowDTO.address).value;

    const customerProps = {
      document: customerRowDTO.document,
      name: customerRowDTO.name,
      cellphone: customerRowDTO.cellphone,
      email: customerRowDTO.email,
      birthdate: customerRowDTO.birthdate,
      address: address
    }

    const uniqueId = new UniqueEntityID(customerRowDTO.id);
    return Customer.build(customerProps, uniqueId).value;
  }

  public toPersistence(customer: Customer): any {
    return {
      id: customer.id.toValue(),
      document: customer.document,
      name: customer.name,
      cellphone: customer.cellphone,
      email: customer.email,
      birthdate: customer.birthdate,
      address: customer.address.toValue()
    }
  }
}
