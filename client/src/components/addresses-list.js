import {AddressesService} from 'services/addresses';

export class AddressesList {
  newAddress;

  static inject = [AddressesService];
  constructor(addressesService) {
    this.addressesService = addressesService;
  }

  createAddress($event) {
    this.addressesService.createAddress().then(result => {
      this.newAddress = result;
    });
    return this.noBubble($event);
  }
  noBubble($event) {
    $event.stopPropagation();
    return false;
  }
}
