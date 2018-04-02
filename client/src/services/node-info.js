import {HttpWrapper} from './http-wrapper';
import {NodeInfo} from 'models/node-info';

export class NodeInfoService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getInfo() {
    return this.http.get('/lnd-node/getinfo').then(result => {
      return new NodeInfo(result);
    });
  }
}
