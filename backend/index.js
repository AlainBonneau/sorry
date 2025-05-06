// chat_backend/index.js (ES6 syntax)

import express from "express";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/chat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const messageSchema = new mongoose.Schema({
  from: String, // 'me' or 'her'
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// REST: Get chat history
app.get("/chat", async (req, res) => {
  const messages = await Message.find().sort({ timestamp: 1 });
  res.json(messages);
});

app.post("/track-view", express.json(), (req, res) => {
  const { target, timestamp } = req.body;
  const line = `${new Date().toISOString()} | ${target}\n`;
  fs.appendFile(path.join(__dirname, "views-log.txt"), line, (err) => {
    if (err) return res.status(500).send("Failed to save view");
    res.status(200).json({ success: true });
  });
});

// WebSocket: Handle new messages
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("chat message", async (msg) => {
    const savedMessage = new Message(msg);
    await savedMessage.save();
    io.emit("chat message", savedMessage); // broadcast to all
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
