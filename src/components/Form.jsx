import React from "react";


function Form() {
  return (
    <div className="form-container">
      <h2>Add Expense</h2>
      <form>
        <div className="form-group">
          <label>Expense Name:</label>
          <input type="text" name="expenseName" />
        </div>

        <div className="form-group">
          <label>Expense Description:</label>
          <input type="text" name="expenseDescription" />
        </div>

        <div className="form-group">
          <label>Amount:</label>
          <input type="text" name="amount" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
