import Students from "./pages/students/Students.jsx";
import Layout from "./layout.jsx";
import All from "./pages/allStudents/All.jsx";
import Student from "./pages/allStudents/dynamic/Student";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Students />}></Route>
          <Route path="/students" element={<All />}></Route>
          <Route path="/students/:id" element={<Student />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
