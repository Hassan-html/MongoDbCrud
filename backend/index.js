import express from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connect } from "./dbconfig/mongoCon.js";
import Student from "./models/userSchema.js";
import { ProfilingLevel } from "mongodb";
config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const findStudent = async () => {
  await connect();
  const Students = await Student.find({});
  return Students;
};
const singleStudent = async (id) => {
  await connect();
  const Students = await Student.findOne({ _id: id });
  return Students;
};

// time to create update api
// p.n i love tabine it give code on its own harigato gozaimasu
app.post("/update", async (req, res) => {
  const body = await req.body;
  const { id, email, FirstName, LastName, Course, Instructor } = body;
  await connect();
  const updatingStudent = await Student.updateOne(
    { _id: id },
    {
      $set: {
        email: email,
        FirstName: FirstName,
        LastName: LastName,
        Course: Course,
        Instructor: Instructor,
      },
    }
  );

  return res.json({ message: "updated user: " + updatingStudent.id });
});

// api to get single item
// actually its same as our get all just some minor changes
app.post("/student", async (req, res) => {
  const body = await req.body;
  const { id } = body;
  const Students = await singleStudent(id);

  return res.json({ message: Students });
});

// api to delete data

app.post("/del", async (req, res) => {
  const body = await req.body;
  await connect();
  const { id } = body;
  console.log(id);
  await Student.deleteOne({ _id: id });

  return res.json({ message: "Deleted" });
});

// api to get data

app.get("/getAll", async (req, res) => {
  // this function will fetch all students from mongo
  const Students = await findStudent();

  // now lets send all these student in response

  return res.json({ message: Students });
});

app.post("/Add", async (req, res) => {
  const body = await req.body;
  await connect();
  //   spreading the body
  const { email, FirstName, LastName, Course, Instructor } = body;
  const savingStudent = await Student.create({
    email: email,
    FirstName: FirstName,
    LastName: LastName,
    Course: Course,
    Instructor: Instructor,
  });
  const savedStudent = await savingStudent.save();
  console.log(savedStudent);

  return res.json({ message: "Your data arrived at end point" });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
