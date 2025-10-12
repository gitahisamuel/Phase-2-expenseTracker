import React from "react";


function ExpenseTable() {
  return (
    <div className="table-container">
      <h2>Expense List</h2>
      <table>
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* Expense items will go here later */}
          <tr>
            <td colSpan="3" className="empty-row">
              No expenses added yet.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
