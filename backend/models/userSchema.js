import mongoose from "mongoose";

// if you dunno whats schema is we just telling our mongodb how many field we have and their specifications and validations

const studentSchema = mongoose.Schema({
  email: { type: String, required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Course: { type: String, required: true },
  Instructor: { type: String, required: true },
});

// as you c its just a simple object in Schema function

// now lets target the models we have in our mongo clustor
// but it will return false as we cureently have no model in our db so what we need to do we need to creat model using our student schema

const Student =
  mongoose.models.student || mongoose.model("student", studentSchema);

// now export it

export default Student;
