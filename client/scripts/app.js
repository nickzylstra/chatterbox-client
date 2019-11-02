var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function initialize() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    MessagesView.render();
  },

  fetch: function fetch(callback = () => {}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      window.Messages = data.results;
      callback();
    },
    // comment out this callback once connection available
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
};
