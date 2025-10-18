import { useEffect, useState} from "react";


function ExpenseTable() {
   const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/expenses")
      .then((response) => response.json()) 
      
     
        .then((data) => {   
          const formattedData = data.map((item) => ({
        ...item,
        expenseAmount: Number(item.expenseAmount), // convert to number
      }));
      setExpenses(formattedData);
        
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


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
          {expenses.length > 0 ? (
            expenses.map((item) => (
              <tr key={item.id}>
                <td>{item.expenseName}</td>
                <td>{item.expenseDescription}</td>
                <td>{item.expenseAmount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="empty-row">
                No expenses added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;





