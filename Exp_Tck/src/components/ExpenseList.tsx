import React from "react";
import type { Expense } from "../types/expense";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({
  data,
  onChange,
}: {
  data: Expense[];
  onChange?: () => void;
}) {
  if (!data.length)
    return <div className="text-center text-slate-500">No expenses yet</div>;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {data.map((e) => (
        <ExpenseItem key={e.id} item={e} onDelete={onChange} />
      ))}
    </div>
  );
}
