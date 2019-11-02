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
    // {'objectId': 'X38oc0lFSw', 'username': 'anonymous', 'text': 'hello chatterbox', 'createdAt': '2019-11-02T00:32:34.255Z', 'updatedAt': '2019-11-02T00:32:34.255Z'}
    const chatHTML = `<div class='chat'>${cleanMessageText}</div>`;
    this.$chats.prepend(chatHTML);
  },
};