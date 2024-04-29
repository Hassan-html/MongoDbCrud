import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
const Student = () => {
  const [body, setBody] = useState();
  const handelsubmit = (e) => {
    // lets make the default form behaviours none
    e.preventDefault();
    console.log(body);

    axios
      .post("http://localhost:5000/Add", body)
      .then((res) => {
        console.log(res);
        toast.success("Student Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1 className="text-[40px] font-bold text-center">Student From</h1>
      <section className="flex justify-center items-center mt-[50px]">
        <form
          className="flex max-w-md flex-col gap-4 w-[400px] "
          onSubmit={handelsubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@domain.com"
              required
              shadow
              onChange={(e) => {
                setBody({ ...body, email: e.target.value });
              }}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="First Name" />
            </div>
            <TextInput
              id="password2"
              type="text"
              required
              shadow
              onChange={(e) => {
                setBody({ ...body, FirstName: e.target.value });
              }}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Last Name" />
            </div>
            <TextInput
              id="repeat-password"
              type="text"
              required
              shadow
              onChange={(e) => {
                setBody({ ...body, LastName: e.target.value });
              }}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Course" />
            </div>
            <TextInput
              id="repeat-password"
              type="text"
              required
              shadow
              onChange={(e) => {
                setBody({ ...body, Course: e.target.value });
              }}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Instructor" />
            </div>
            <TextInput
              id="repeat-password"
              type="text"
              required
              shadow
              onChange={(e) => {
                setBody({ ...body, Instructor: e.target.value });
              }}
            />
          </div>

          <Button type="submit" className="bg-primary">
            Add
          </Button>
        </form>
      </section>
    </>
  );
};

export default Student;
