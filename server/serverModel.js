const mongoose = require("mongoose");
const subscribeSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  {
    timestampes: true,
  }
);

const Email = mongoose.model("Subscriber", subscribeSchema);
module.exports = Email;
