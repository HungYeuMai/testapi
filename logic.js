const { io } = require("./instant");

io.on("connection", function (socket) {

  const {
    id, name 
  }= socket.handshake.query;

    console.log('====================================');
    console.log(`${socket.id} - ${name} connected`);
    console.log('====================================');

  socket.on("join-room", ({ roomId }) => {
    socket.join(roomId);
    io.to(roomId).emit("new_user_join", { name, id });
    console.log('====================================');
    console.log(`${id}-${name} joined to the room ${roomId}`);
    console.log('====================================');
  });


  socket.on("new_message", function ({ text, roomId }) {
    console.log('====================================');
    console.log('new msg', text, roomId );
    console.log('====================================');
    io.to(roomId).emit('new_message', { text, name, id })
  });

  socket.on("typing", function ({ msg, roomId }) {
    socket.to(roomId).emit('typing', { msg, name, id })
  });

  socket.on("disconnect", function () {
    console.log('====================================');
    console.log(`client ${socket.id} disconnected`);
    console.log('====================================');
  });

  socket.on('leave_room', ({ roomId })=>{
    console.log('====================================');
    console.log(id, ` leave the room `, roomId);
    console.log('====================================');
    socket.leave(roomId)
  });
});
