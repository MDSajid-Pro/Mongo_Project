const mongoose = require('mongoose');
const studentModle = require("./models/student.model1");

/**
 * Write the code to connect with MongoDB
 */

mongoose.connect("mongodb://localhost/be_demodb");

const db = mongoose.connection //Start the connection with MongoDB

db.on("error", () => {
    console.log("Error while connecting to DB");

});

db.once("open", () => {
    console.log("Connected to MongoDB");
    //Logic to insert into DB
    init()
});

async function init() {
    //Logic to insert into DB
    const Student = {
        name : "Md Sajid",
        age: 24,
        email: "mdsajid7908@gmail.com",
        subjects : ["Zoology","Botany","Chemistry"]
    }

    const std_obj = await studentModle.create(Student);

    console.log(std_obj);
}
