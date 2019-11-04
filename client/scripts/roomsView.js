var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', function(event) {
      App.refreshContent();
    });
    /* this.$select.on('change', function(event) {
      const room;
      this.renderRoom(room);
    }); */
  },

  render: function() {
    this.$select.empty();
    window.Rooms.roomList.forEach((room) => {
      renderRoom(room);
    });
  },

  renderRoom: function renderRoom(room) {
    // const cleanRoom = Security.cleanRoomName(room);
    // const roomHTML = `<option value="${cleanRoom}"></option>`;
    const roomHTML = _.template('<option value=<%- name %></option>')(room);
    this.$select.append(roomHTML);
  },

};
