var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // create message object
    const text = event.target.children[0].value;
    const message = {text: text,
      username: App.username};

    // send message object to server
    Parse.create(message, (data) => {
      // TODO - what comes back???
      App.refreshMessages();
    });
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};