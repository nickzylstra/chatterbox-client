var MessageView = {
  validateMessageProps: function validateMessageProps(message) {
    return Object.prototype.hasOwnProperty.call(message, 'objectId') &&
      Object.prototype.hasOwnProperty.call(message, 'username') &&
      Object.prototype.hasOwnProperty.call(message, 'text') &&
      Object.prototype.hasOwnProperty.call(message, 'createdAt') &&
      Object.prototype.hasOwnProperty.call(message, 'updatedAt');
  },

  addRoomnameProp: function addRoomProp(message) {
    if (!Object.prototype.hasOwnProperty.call(message, 'roomname')) {
      message.roomname = '';
    }
  },

  // function for rendering message contents with escaped HTML
  // TODO - why do spaces not display correctly?
  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div class="chat text"><%- text %></div>
        <div class="roomname">#<%- roomname %></div>
        <div class="chat timestamp"><%- updatedAt %></div>
      </div>
    `),

};