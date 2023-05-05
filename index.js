const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

//schema
const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});

//models ->object
const Student = new mongoose.model("Student", student);

const adder = async () => {
  const ss = await Student.create({
    name: "prateek",
    workout: false,
    height: 5,
  });
  console.log(ss);
};
adder(); 
