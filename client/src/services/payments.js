import {HttpWrapper} from './http-wrapper';
import {Payment} from 'models/payment';

export class PaymentsService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  payInvoice() {
    return this.http.post('/invoices').then(result => {
      return result.invoices.map(item => {
        return new Invoice(item);
      });
    });
  }
}
