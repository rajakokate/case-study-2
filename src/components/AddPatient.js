import { useState, useEffect } from "react";
import "./AddPatient.css";
import PopUp from "./PopUp";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
function AddPatient() {
  const initialValues = {
    name: "",
    ssn: "",
    address: "",
    dob: "",
    email: "",
    contactNumber: "",
    payer: "",
    plan: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  //disable future dates
  const disableDates = () => {
    var today, mm, dd, yyyy;
    today = new Date();
    dd = today.getDate();
    mm = today.getMonth();
    yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const validate = (values) => {
    const errors = {};
    const regexName = /^[a-zA-Z ]*$/;
    const regexSsn = /^[0-9]*$/;
    const regexAddress = /[^A-Za-z0-9]+/;
    const regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    // Name validation
    if (!values.name) {
      errors.name = "Name is required!";
    } else if (!regexName.test(values.name)) {
      errors.name = "Please enter alphabets only!";
    } else if (values.name.length < 5) {
      errors.name = "Name should not be less than 5 characters!";
    } else if (values.name.length > 30) {
      errors.name = "Name should not be greater than 30 characters!";
    }

    // SSN validation
    if (!values.ssn) {
      errors.ssn = "SSN is required!";
    } else if (!regexSsn.test(values.ssn)) {
      errors.ssn = "Please enter Numbers only!";
    } else if (values.ssn.length < 10) {
      errors.ssn = "SSN must not be less than 10 digit!";
    } else if (values.ssn.length > 10) {
      errors.ssn = "SSN must not be greater than 10 digit!";
    }

    // address validation
    if (!values.address) {
      errors.address = "Address is required!";
    } else if (!regexAddress.test(values.address)) {
      errors.address = "Address must be alphabets and  Numbers only!";
    }

    // DOB validation

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    if (!values.dob) {
      errors.dob = "Date of Birth is required!";
    } else if (values.dob > currentDate) {
      errors.dob = "";
    }

    // email validation
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "This is not a valid email address!";
    }

    //Contact number validation
    if (!values.contactNumber) {
      errors.contactNumber = "Contact Number is required!";
    } else if (values.contactNumber.length < 10) {
      errors.contactNumber = "Contact Number must be 10 numbers!";
    } else if (values.contactNumber.length > 10) {
      errors.contactNumber =
        "Contact Number must not be greater than 10 numbers!";
    }

    // payer validation
    if (!values.payer) {
      errors.payer = "Payer is required!";
    }

    // Plan validation
    if (!values.plan) {
      errors.plan = "Plan is required!";
    }

    return errors;
  };

  const today = new Date();
  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? <PopUp /> : null}

      <form onSubmit={handleSubmit}>
        <h4>Patient Information</h4>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p>{formErrors.name}</p>
          <div className="field">
            <label>Social Security number (SSN)</label>
            <input
              type="tel"
              name="ssn"
              placeholder="XXX-XX-XXXX"
              value={formValues.ssn}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p>{formErrors.ssn}</p>
          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formValues.address}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p>{formErrors.address}</p>
          <div className="field">
            <label>Date Of Birth</label>
            <input
              type="date"
              name="dob"
              value={formValues.dob}
              onChange={handleChange}
              className="form-control"
              max={disableDates()}
            />
          </div>
          <p>{formErrors.dob}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Contact Number</label>
            <input
              type="phoneNumber"
              name="contactNumber"
              value={formValues.contactNumber}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p>{formErrors.contactNumber}</p>
          <h4>Insurance</h4>
          <div className="field">
            <label>Payer</label>
            <input
              type="text"
              name="payer"
              value={formValues.payer}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p>{formErrors.payer}</p>
          <div className="field">
            <label>Plan</label>
            <input
              type="text"
              name="plan"
              value={formValues.plan}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <p>{formErrors.plan}</p>
          <div className="submitButton">
            <button
              className="btn btn-primary submitButton"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPatient;
