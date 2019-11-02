var MessageView = {
  // TODO - handle room names?
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
        <div class="chat text"><%- text %></div>
        <div class="chat timestamp"><%- updatedAt %></div>
      </div>
    `),

};