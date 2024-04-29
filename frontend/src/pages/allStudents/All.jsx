import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
const All = () => {
  // lets get all student need to make req using axios
  const [data, setData] = useState();

  const Delete = (e) => {
    axios
      .post("http://localhost:5000/del", { id: e.target.value })
      .then((res) => {
        console.log(res);
        // lets refresh our page
        toast.error("Deleted");
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // use get here cause we listenig for get req in our api
    axios
      .get("http://localhost:5000/getAll")
      .then((res) => {
        setData(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
    //   and now we have all data lets cahnge state of the data using useState
  }, []);
  if (data) {
    return (
      <>
        <h1 className="text-[40px] font-bold text-center">Students</h1>
        {/* leme make some template to display */}
        {/* got use map function if you dunno react leme know if i should make a course on that */}
        {/* lets forget about key prop its not needed anyway */}
        {/* the buttons disappeared leme fix it */}
        {data.map((item) => {
          return (
            <>
              <section
                className="bg-primary bg-opacity-10 p-4 w-[80%] m-auto rounded-[20px] overflow-hidden mt-4"
                key={item.id}
              >
                <div className="flex justify-between  bg-primary p-[5px] text-white">
                  <h1>stduent</h1>
                  <div className="flex gap-3">
                    <Link to={`/students/${item._id}`}>
                      <button>Edit</button>
                    </Link>
                    <button value={item._id} onClick={Delete}>
                      Delete
                    </button>
                  </div>
                </div>
                <article className="flex justify-around mt-5">
                  <div className="group ">
                    <span>Name:</span>
                    <p>{item.FirstName + " " + item.LastName}</p>
                  </div>
                  <div className="group ">
                    <span>Email:</span>
                    <p>{item.email}</p>
                  </div>
                  <div className="group ">
                    <span>Course:</span>
                    <p>{item.Course}</p>
                  </div>
                  <div className="group ">
                    <span>Instructor:</span>
                    <p>{item.Instructor}</p>
                  </div>
                </article>
              </section>
            </>
          );
        })}
      </>
    );
  } else {
    return <>Loading</>;
  }
};

export default All;
