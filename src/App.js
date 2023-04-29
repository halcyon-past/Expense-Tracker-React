import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Pendrive",
    amount: 2000,
    date: new Date(2023, 6, 19),
  },
  {
    id: "e6",
    title: "Toys",
    amount: 1000,
    date: new Date(2022, 1, 12),
  },
  {
    id: "e7",
    title: "Harry Potter Book",
    amount: 450,
    date: new Date(2021, 5, 17),
  },
  {
    id: "e8",
    title: "Pizza",
    amount: 300,
    date: new Date(2023, 9, 12),
  },
  {
    id: "e9",
    title: "Football",
    amount: 790,
    date: new Date(2023, 1, 22),
  },
  {
    id: "e10",
    title: "Light Bulb",
    amount: 700,
    date: new Date(2021, 8, 2),
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
