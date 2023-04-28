import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {

  const [title,setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <div className="expense-item">
        <ExpenseDate date={props.date} />
      <div className="expense-item-description">
        <h2>{title}</h2>
        <div className="expense-item-price">{props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  );
}

