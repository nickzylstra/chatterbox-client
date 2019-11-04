var MessagesView = {
  $chats: $('#chats'),
  $chatsRefreshButton: $('#chatsRefreshButton'),

  initialize: function initialize() {
    this.$chatsRefreshButton.on('click', function(event) {
      App.refreshContent();
    });
  },

  render: function render(room) {
    this.$chats.empty();
    window.Messages.messageList.forEach((message) => {
      if (room) {
        if (message.roomname === room) {
          MessagesView.renderMessage(message);
        }
      } else {
        MessagesView.renderMessage(message);
      }
    });
  },

  renderMessage: function renderMessage(message) {
    if (MessageView.validateMessageProps(message)) {
      const messageHTML = MessageView.render(message);
      this.$chats.append(messageHTML);
    }
  },
};