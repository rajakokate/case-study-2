import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPatient from "./NewPatient";
import AddPatient from "./AddPatient";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />}></Route>
          <Route exact path="/newPatient" element={<NewPatient />}></Route>
          <Route exact path="/addPatient" element={<AddPatient />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
