import React, { useState } from "react";
import type { Expense } from "../types/expense";
import { createExpense } from "../services/api";

export default function ExpenseForm({ onDone }: { onDone?: () => void }) {
  const [form, setForm] = useState<Omit<Expense, "id">>({
    name: "",
    cost: 0,
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "cost" ? Number(value) : value,
    }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createExpense(form);
      setForm({ name: "", cost: 0, date: "", time: "" });
      if (onDone) onDone();
    } catch (err) {
      console.error(err);
      alert("Failed to add expense");
    }
  };

  return (
    <form
      onSubmit={submit}
      className="max-w-xl mx-auto bg-white p-6 rounded shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Title"
        className="w-full p-2 border mb-3 rounded"
      />
      <input
        name="cost"
        value={form.cost}
        onChange={handleChange}
        type="number"
        placeholder="Amount"
        className="w-full p-2 border mb-3 rounded"
      />
      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          type="date"
          className="p-2 border rounded"
        />
        <input
          name="time"
          value={form.time}
          onChange={handleChange}
          type="time"
          className="p-2 border rounded"
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
          Add
        </button>
      </div>
    </form>
  );
}
