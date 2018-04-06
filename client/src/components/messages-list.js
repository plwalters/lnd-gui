import {bindable} from 'aurelia-templating';
import {MessagesService} from 'services/messages';
import {Message} from 'models/message';

export class MessagesList {
  @bindable messages;
  @bindable newMessage = new Message();

  static inject = [MessagesService];
  constructor(messagesService) {
    this.messagesService = messagesService;
  }

  attached() {
    return this.getMessageInfo();
  }

  getMessageInfo() {
    return this.messagesService.getMessages().then(result => {
      this.messages = result;
    });
  }
}
