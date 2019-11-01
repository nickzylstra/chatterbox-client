var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function renderRoom(room) {
    const cleanRoom = Security.cleanRoomName(room);
    const roomHTML = `<option value="${cleanRoom}"></option>`;
    this.$select.prepend(roomHTML);
  },

};
