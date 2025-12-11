import React from "react";
import type { Expense } from "../types/expense";
import { deleteExpense } from "../services/api";

export default function ExpenseItem({
  item,
  onDelete,
}: {
  item: Expense;
  onDelete?: () => void;
}) {
  const remove = async () => {
    if (!confirm("Delete this expense?")) return;
    await deleteExpense(item.id);
    if (onDelete) onDelete();
  };

  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">
      <div>
        <div className="font-semibold">{item.name}</div>
        <div className="text-sm text-slate-500">
          {item.date} {item.time ?? ""}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="font-medium">₹{item.cost}</div>
        <button onClick={remove} className="text-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
