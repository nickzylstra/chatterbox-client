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
    const cleanMessageText = Security.retrieveCleanMessageText(message);
    const chatHTML = `<div class='message'>${cleanMessageText}</div>`;
    this.$chats.prepend(chatHTML);
  },
};