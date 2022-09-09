const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  reminderMsg: String,
  remindAt: String,
  isReminded: Boolean,
});

const Reminder = new mongoose.model("reminder", reminderSchema);
module.exports = Reminder;
