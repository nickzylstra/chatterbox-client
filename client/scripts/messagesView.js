var MessagesView = {
  $chats: $('#chats'),
  $chatsRefreshButton: $('#chatsRefreshButton'),

  initialize: function initialize() {
    this.$chatsRefreshButton.on('click', function(event) {
      App.refreshMessages();
    });
  },

  render: function render() {
    this.$chats.empty();
    window.Messages.messageList.forEach((message) => {
      MessagesView.renderMessage(message);
    });
  },

  renderMessage: function renderMessage(message) {
    if (MessageView.validateMessageProps(message)) {
      MessageView.addRoomnameProp(message);
      const messageHTML = MessageView.render(message);
      this.$chats.append(messageHTML);
    }
  },
};