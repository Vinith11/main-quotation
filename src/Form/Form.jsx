import React, { useState } from "react";
import "../CustomCss/Form.css";
import { databases } from "../Config/config";
import { dbid, cid } from "../Config/dbconfig";
import { ID } from "appwrite";
import { Toast } from "primereact/toast";
import { useRef ,useEffect} from "react";

const Form = () => {
  const toast = useRef(null);


 

  const [formData, setFormData] = useState({
    generatorCompany: "",
    modelName: "",
    contoroler: "",
    actuator: "",
    breaker: false,
    breakerType: "",
    // description:''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData.hasOwnProperty(key) && key !== "breakerType" && formData[key] === "") {
        toast.current.show({
          severity: "error",
          summary: "Info",
          detail: "Please fill in all fields",
        });
        return;
      }
    }
    

    console.log("Form Data:", formData);

    const promise = databases.createDocument(dbid, cid, ID.unique(), {
      generatorCompany: formData.generatorCompany,
      modelName: formData.modelName,
      contoroler: formData.contoroler,
      actuator: formData.actuator,
      breaker: formData.breaker,
      breakerType: formData.breakerType,
    });

    promise.then(
      function (response) {
        console.log(response);
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Form Submitted Successfully",
        });
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <>

      <Toast ref={toast} position="top-right" />

      <div className="form-container">
        <h2 className="form-heading">Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Company Name */}
          <div className="form-group">
            <label htmlFor="generatorCompany" className="form-label">
              Company Name:
            </label>
            <input
              type="text"
              id="generatorCompany"
              name="generatorCompany"
              value={formData.generatorCompany}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          {/* Model Name */}
          <div className="form-group">
            <label htmlFor="modelName" className="form-label">
              Model Name:
            </label>
            <input
              type="text"
              id="modelName"
              name="modelName"
              value={formData.modelName}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          {/* contoroler */}
          <div className="form-group">
            <label htmlFor="contoroler" className="form-label">
              contoroler:
            </label>
            <input
              type="text"
              id="contoroler"
              name="contoroler"
              value={formData.contoroler}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          {/* Actuator */}
          <div className="form-group">
            <label htmlFor="actuator" className="form-label">
              Actuator:
            </label>
            <input
              type="text"
              id="actuator"
              name="actuator"
              value={formData.actuator}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          {/* Breaker */}
          <div className="form-group">
            <label className="checkbox-label">
              Breaker:
              <input
                type="checkbox"
                name="breaker"
                checked={formData.breaker}
                onChange={handleChange}
                className="checkbox-input"
              />
            </label>
          </div>

          {/* Breaker Type */}
          {formData.breaker && (
            <div className="form-group">
              <label htmlFor="breakerType" className="form-label">
                Breaker Type:
              </label>
              <input
                type="text"
                id="breakerType"
                name="breakerType"
                value={formData.breakerType}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          )}

          <div className="form-group">
            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
