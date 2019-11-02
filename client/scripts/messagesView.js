var MessagesView = {
  $chats: $('#chats'),

  initialize: function initialize() {
  },

  render: function render() {
    window.Messages.forEach((message) => {
      MessagesView.renderMessage(message);
    });
  },

  renderMessage: function renderMessage(message) {
    if (MessageView.validateMessageProps(message)) {
      const messageHTML = MessageView.render(message);
      this.$chats.prepend(messageHTML);
    }
  },
};