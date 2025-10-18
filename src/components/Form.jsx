import React from "react";
import { useState } from "react";



function Form() {

  const[formData, setFormData]= useState ({
    expenseName: "",
    expenseDescription:"",
    amount:""



});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};



const handleSubmit = async (e) => {
  e.preventDefault();

  console.log(formData);

   const response = await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
};

  return (
    <div className="form-container">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Expense Name:</label>
          <input type="text" name="expenseName" value={formData.expenseName} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label>Expense Description:</label>
          <input type="text" name="expenseDescription" value={formData.expenseDescription}onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label>Amount:</label>
          <input type="number" name="amount" value={formData.amount}onChange={handleChange} />
        </div>

        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default Form;
