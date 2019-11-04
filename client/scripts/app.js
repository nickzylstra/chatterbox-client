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
      App.refreshRooms();
      App.refreshMessages();
      App.stopSpinner();
    });
  },

  addRoom: function addRoom(roomname) {
    Rooms[roomname] = {'name': roomname};
  },

  getRoomFromUser: function getRoomFromUser() {
    // TODO - need to ensure room name is safe before evaluating
    const roomname = (prompt('What is the roomname you want to add?') || '');
    return roomname;
  },

  addUserRoom: function addUserRoom() {
    const roomname = App.getRoomFromUser();
    App.addRoom(roomname);
    App.refreshRooms();
    MessagesView.render(roomname);
  },

  refreshRooms: function refreshRooms() {
    // update rooms selector with existing messages
    Messages.messageList.forEach((message) => {
      if (!Object.prototype.hasOwnProperty.call(message, 'roomname')) {
        message.roomname = '';
      }
      // TODO - need to ensure room name is safe before evaluating
      // const room = JSON.parse(message.roomname) || '';
      const roomname = message.roomname;
      App.addRoom(roomname);
    });
    RoomsView.render();
  },

  refreshMessages: function refreshMessages(roomname = '') {
    MessagesView.render(roomname);
  },

};
