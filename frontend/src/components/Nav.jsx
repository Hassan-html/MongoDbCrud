import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-4">
        <Link to="/">
          <Button className="bg-primary">Add More</Button>
        </Link>
        <Link to="/students">
          <Button className="bg-primary">All</Button>
        </Link>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
