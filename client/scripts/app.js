var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function initialize() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    App.refreshContent();
  },

  fetch: function fetch(callback = () => {}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      window.Messages.messageList = data.results;
      callback();
    },
    // can comment out this callback when server available
    () => {
      console.log('failed to retrieve messages from server, using local copy');
      callback();
    });
  },

  // send message object to server
  sendMessage: function sendMessage(message) {
    Parse.create(message, (data) => {
      console.log(data);
      App.refreshContent();
    });
  },

  startSpinner: function startSpinner() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function stopSpinner() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  refreshContent: function refreshContent() {
    // Fetch messages and refresh DOM
    App.startSpinner();
    App.fetch(() => {
      MessagesView.render();
      App.refreshRooms();
      App.stopSpinner();
    });
  },

  refreshRooms: function refreshRooms () {
    // update rooms selector with existing messages

    RoomsView.render();
  },
};
