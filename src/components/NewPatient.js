import React, { useState } from "react";
import "./NewPatient.css";
import { useForm } from "react-hook-form";

const NewPatient = () => {
  const [name, setName] = useState("");
  const [ssn, setSsn] = useState("");
  const [address, setAddress] = useState("");

  const nameChange = (event) => {
    const formattedName = event.target.value.replace(/[^a-z ]/gi, "");
    setName(formattedName);
  };

  const ssnChange = (event) => {
    const formattedSSN = event.target.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3");
    setSsn(formattedSSN);
  };

  const addressChange = (event) => {
    const formattedAddress = event.target.value.replace(/[^\w\s]/gi, "");
    setAddress(formattedAddress);
  };

  return (
    <div>
      <h4>Patient Information</h4>
      <form>
        

        <div className="form-group">
          <label className="form-label">Name </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={nameChange}
            minLength="5"
            maxLength="30"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Social Security number (SSN) </label>
          <input
            value={ssn}
            type="tel"
            name="cardNumber"
            inputMode="numeric"
            className="form-control"
            onChange={ssnChange}
            maxLength="9"
          ></input>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={addressChange}
          ></input>
        </div>

        <div className="form-group">
          <label>Date Of Birth</label>
          <input type="date" className="form-control"></input>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control"></input>
        </div>

        <div className="form-group">
          <label>Contact number</label>
          <input
            type="number"
            className="form-control"
            minLength="10"
            maxLength="10"
          ></input>
        </div>

        <h4>Insurance</h4>
        <div className="form-group">
          <label>Payer</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={addressChange}
          ></input>
        </div>

        <div className="form-group">
          <label>Plan</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={addressChange}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPatient;
