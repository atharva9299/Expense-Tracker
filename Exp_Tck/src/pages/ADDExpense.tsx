import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import { useExpenses } from "../context/ExpenseContext";

export default function AddExpense() {
  const { reload } = useExpenses();
  return (
    <div className="container mx-auto p-6">
      <ExpenseForm onDone={() => void reload()} />
    </div>
  );
}
