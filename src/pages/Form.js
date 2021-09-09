// Import useState hook
import React, { useState } from "react";

//destructure out props, including router prop history
const Form = ({ initialCard, handleSubmit, buttonLabel, history }) => {
  ////////////////
  // The Form Data State
  ////////////////
  // Initialize the form with the initialCard state
  const [formData, setFormData] = useState(initialCard);

  //////////////////////////
  // Functions
  //////////////////////////

  // Standard React Form HandleChange Function
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to run when form is submitted
  const handleSubmisson = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page
    history.push("/");
  };

  // Our Form, an input for the subject and details fields and a submit button
  return (
    <form onSubmit={handleSubmisson}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.firstName}
        name="firstName"
        placeholder="First Name"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.lastName}
        name="lastName"
        placeholder="Last Name"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.nickname}
        name="nickname"
        placeholder="Nickname"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.currentDivision}
        name="currentDivision"
        placeholder="Current Division"

      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.record}
        name="record"
        placeholder="Record"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.img}
        name="img"
        placeholder="Image Link"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.age}
        name="age"
        placeholder="Age"
      />
      <input type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;