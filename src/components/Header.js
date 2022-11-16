import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const newPatientClick = () => {
    navigate("/newPatient");
  };

  const addPatientClick = () => {
    navigate("/addPatient");
  };

  return (
    <div className="container ">
      <div>       
        <button
          type="button"
          className="btn btn-primary"
          onClick={newPatientClick}
        >
          Register New Patient
        </button>
      </div>
      <br></br>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={addPatientClick}
        >
          Add Patient to DB
        </button>
      </div>
    </div>
  );
};

export default Header;
