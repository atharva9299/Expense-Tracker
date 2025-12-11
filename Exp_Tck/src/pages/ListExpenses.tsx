import React from "react";
import ExpenseList from "../components/ExpenseList";
import { useExpenses } from "../context/ExpenseContext";

export default function ListExpenses() {
  const { expenses, reload } = useExpenses();
  return (
    <div className="container mx-auto p-6">
      <h3 className="text-xl mb-4">All expenses</h3>
      <ExpenseList data={expenses} onChange={() => void reload()} />
    </div>
  );
}
