var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', function(event) {
      App.addUserRoom();
    });
    this.$select.on('change', function(event) {
      const room = event.target.value;
      App.refreshMessages(room);
    });
  },

  render: function() {
    this.$select.empty();
    /* window.Rooms.roomList.forEach((room) => {
      renderRoom(room);
    }); */
    _.each(Rooms, (room) => this.renderRoom(room), this);
  },

  renderRoom: function renderRoom(room) {
    // const cleanRoom = Security.cleanRoomName(room);
    // const roomHTML = `<option value="${cleanRoom}"></option>`;
    const roomHTML = _.template('<option value=<%- name %>><%- name %></option>')(room);
    this.$select.append(roomHTML);
  },

};
