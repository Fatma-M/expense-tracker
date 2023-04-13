import ExpenseItem from "./ExpenseItem";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses({ expenses }) {
  return (
    <>
      <Card className="expenses">
        {expenses.map((item) => (
          <ExpenseItem className="expense-item" key={item.id} item={item}>
            <ExpenseDate item={item} />

            <div className="expense-item__description">
              <h2>{item.title}</h2>
              <div className="expense-item__price">${item.amount}</div>
            </div>
          </ExpenseItem>
        ))}
      </Card>
    </>
  );
}

export default Expenses;
