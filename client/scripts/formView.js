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
    const roomname = App.roomname;
    const message = {
      text: text,
      username: App.username,
    };
    if (roomname) {
      message.roomname = roomname;
    }

    // send message object to server
    App.sendMessage(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};