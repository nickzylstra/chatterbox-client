var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', function(event) {
      App.refreshMessages();
    });
    /* this.$select.on('change', function(event) {
      const room;
      this.renderRoom(room);
    }); */
  },

  render: function() {
    window.Rooms.roomList.forEach((room) => {

    });
  },

  renderRoom: function renderRoom(room) {
    const cleanRoom = Security.cleanRoomName(room);
    const roomHTML = `<option value="${cleanRoom}"></option>`;
    this.$select.append(roomHTML);
  },

};
