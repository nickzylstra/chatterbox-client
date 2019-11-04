var MessagesView = {
  $chats: $('#chats'),
  $chatsRefreshButton: $('#chatsRefreshButton'),

  initialize: function initialize() {
    this.$chatsRefreshButton.on('click', function(event) {
      App.refreshContent();
    });
  },

  render: function render() {
    this.$chats.empty();
    const roomname = App.roomname;
    window.Messages.messageList.forEach((message) => {
      if (roomname) {
        if (message.roomname === roomname) {
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