var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // create message object
    const textNode = event.target.children[0];
    const text = textNode.value;
    textNode.value = '';
    const message = {text: text,
      username: App.username};

    // send message object to server
    App.sendMessage(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};