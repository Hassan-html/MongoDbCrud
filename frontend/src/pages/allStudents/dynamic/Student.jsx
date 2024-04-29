/* eslint-disable react-hooks/exhaustive-deps */
// we have the id now in our params
// how we can use it its easy we gon ause use param hook
import { useEffect } from "react";
import { useParams } from "react-router";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
const Student = () => {
  const param = useParams();

  const [body, setBody] = useState();
  const [data, setData] = useState();
  const handelsubmit = (e) => {
    // lets make the default form behaviours none
    e.preventDefault();
    axios
      .post("http://localhost:5000/update", { ...body, id: param.id })
      .then((res) => {
        console.log(res);

        toast.success("Updated");
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    // for some reason its not working well for now lest hold it here
  };

  useEffect(() => {
    console.log(param);
    axios
      .post("http://localhost:5000/student", { id: param.id })
      .then((res) => {
        setData(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  }, []);
  if (data) {
    return (
      <>
        <>
          <h1 className="text-[40px] font-bold text-center">Edit From</h1>
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
                  placeholder={data.email}
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
                  shadow
                  placeholder={data.FirstName}
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
                  placeholder={data.LastName}
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
                  placeholder={data.Course}
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
                  shadow
                  placeholder={data.Instructor}
                  onChange={(e) => {
                    setBody({ ...body, Instructor: e.target.value });
                  }}
                />
              </div>

              <Button type="submit" className="bg-primary">
                Update
              </Button>
            </form>
          </section>
        </>
      </>
    );
  } else {
    return <>...loading</>;
  }
};
export default Student;
