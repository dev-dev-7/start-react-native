const ChatSchema = {
  name: 'Chat',
  primaryKey: 'id',
  properties: {
    id: 'string',
    sender: 'string',
    reciever: 'string',
    message: 'string',
    status: 'int?',// 0->not sent 1->sent 2->delivered 3->read 4->recieved message
    senderName: 'string?',
    senderImage: 'string?',
    time: 'date',
  }
};

export default ChatSchema;