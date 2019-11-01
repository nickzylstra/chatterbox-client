let App = {

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
  },

  fetch: function fetch(callback = () => {}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

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
