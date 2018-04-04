import {bindable} from 'aurelia-templating';
import {ChannelsService} from 'services/channels';
import {Channel} from 'models/channel';

export class ChannelsList {
  @bindable values;
  @bindable newChannel = new Channel();

  static inject = [ChannelsService];
  constructor(channelsService) {
    this.channelsService = channelsService;
  }

  attached() {
    return this.getChannelInfo();
  }

  getChannelInfo() {
    return this.channelsService.getInfo().then(result => {
      this.values = result;
    });
  }
  connectChannel() {
    let channel = this.newChannel;
    return this.channelsService.connectChannel(channel)
  }
  noBubble($event) {
    $event.stopPropagation();
    return false;
  }
}
