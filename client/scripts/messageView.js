var MessageView = {

  // {'objectId': 'X38oc0lFSw', 'username': 'anonymous', 'text': 'hello chatterbox', 'createdAt': '2019-11-02T00:32:34.255Z', 'updatedAt': '2019-11-02T00:32:34.255Z'}
  validateMessageProps: function validateMessageProps(message) {
    return message.hasOwnProperty('objectId') &&
      message.hasOwnProperty('username') &&
      message.hasOwnProperty('text') &&
      message.hasOwnProperty('createdAt') &&
      message.hasOwnProperty('updatedAt');
  },

  // function for rendering message contents with escaped HTML
  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div class="chatText"><%- text %></div>
      </div>
    `),

};