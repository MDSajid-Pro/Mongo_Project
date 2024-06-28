/**
 * Define the schema of the students collection to be
 * stored in the DB
 */

const mongoose = require("mongoose");

//Schema

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});

//Go ahead and create corresponding collections in DB

module.exports = mongoose.model("Student", studentSchema);

