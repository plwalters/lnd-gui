import {NodeInfoService} from 'services/node-info';

export class NodeInfo {
  nodeInfo;

  static inject = [NodeInfoService];
  constructor(nodeService) {
    this.nodeService = nodeService;
  }

  getInfo() {
    this.nodeService.getInfo().then(result => {
      this.nodeInfo = result;
    });
  }
}
