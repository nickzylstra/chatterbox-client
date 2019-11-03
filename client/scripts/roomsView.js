var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
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
