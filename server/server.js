const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const Router = express.Router();
const userRouter = require('./user');

const app = express();

const server = require("http").Server(app)
const io = require('socket.io')(server)
const model = require('./model')
const Chat = model.getModel('chat');

//remove all chat
// Chat.remove({},function (e,d) {
	
// })

io.on("connection",function (socket) {
	console.log("user login")
	socket.on('sendmsg',function (data) {
		console.log(JSON.stringify(data))
		const {from, to, msg} = data
		const chatid = [from,to].sort().join('_')
		Chat.create({chatid,from,to,content:msg},function (err,doc) {
			io.emit('recvmsg',Object.assign({},doc._doc))
		})
		// io.emit('recvmsg',data)
	})
})
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user', userRouter);



server.listen(9999, function () {
	console.log("listen on port 9999")
});