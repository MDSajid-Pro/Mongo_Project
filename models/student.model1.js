/**
 * Define the schema of the students collection to be
 * stored in the DB
 */

const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");

//Schema

const studentSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true
    },
    age: {
        type : Number,
        min : 19
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        minLength: 15
    },
    subjects: [String],
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now()
        }
    }
});

//Go ahead and create corresponding collections in DB

module.exports = mongoose.model("Student", studentSchema);

