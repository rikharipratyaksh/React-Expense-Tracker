import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeHandler = (changedYear) => {
    console.log("changedYear", changedYear);
    setFilteredYear(changedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeYear={changeHandler} />
      {props?.data.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}

export default Expenses;
