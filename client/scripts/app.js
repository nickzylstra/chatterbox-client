var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function initialize() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    App.refreshMessages();
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

  startSpinner: function startSpinner() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function stopSpinner() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  refreshMessages: function refreshMessages() {
    // Fetch messages and refresh DOM
    App.startSpinner();
    App.fetch(App.stopSpinner);
    MessagesView.render();
  },
};
