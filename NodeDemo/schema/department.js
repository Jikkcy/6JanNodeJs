const mongoose = require("mongoose");

const { Schema } = mongoose;

const departmentSchema = new Schema({
  name: String,
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
      required: true,
    },
  ],
});

const Department = mongoose.model("department", departmentSchema);

module.exports = Department;