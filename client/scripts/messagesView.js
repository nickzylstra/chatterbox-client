var MessagesView = {
  $chats: $('#chats'),
  $chatsRefreshButton: $('#chatsRefreshButton'),

  initialize: function initialize() {
    this.$chatsRefreshButton.on('click', function(event) {
      App.refreshContent();
    });
  },

  render: function render(roomname, friends) {
    this.$chats.empty();
    window.Messages.messageList.forEach((message) => {
      if (roomname) {
        if (message.roomname === roomname) {
          MessagesView.renderMessage(message, friends);
        }
      } else {
        MessagesView.renderMessage(message, friends);
      }
    });
    // TODO - is there a better place for this logic below?
    const $usernames = $('.chat .username');
    $usernames.click(function(event) {
      const friendUsername = event.target.textContent;
      App.toggleFriend(friendUsername);
    });
  },

  renderMessage: function renderMessage(message, friends) {
    if (MessageView.validateMessageProps(message)) {
      const messageHTML = MessageView.render(message);
      this.$chats.append(messageHTML);
      // TODO - do more efficiently elsewhere
      const $element = this.$chats.children().last().children('.username');
      const username = $element[0].textContent;
      if (friends[username]) {
        $element.addClass('friend');
      }
    }
  },
};
