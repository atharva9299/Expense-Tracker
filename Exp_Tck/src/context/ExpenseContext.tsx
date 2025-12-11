import React, { createContext, useContext, useEffect, useState } from "react";
import type { Expense } from "../types/expense";
import { getExpenses } from "../services/api";

type ExpenseCtx = {
  expenses: Expense[];
  reload: () => Promise<void>;
};

const ExpenseContext = createContext<ExpenseCtx | null>(null);

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const reload = async () => {
      try {
        const res = await getExpenses();
        setExpenses(res.data);
      } catch (err) {
        console.error("Failed to load expenses", err);
      }
    };
    void reload();
  }, []);

  const reload = async () => {
    try {
      const res = await getExpenses();
      setExpenses(res.data);
    } catch (err) {
      console.error("Failed to load expenses", err);
    }
  };

  return (
    <ExpenseContext.Provider value={{ expenses, reload }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  const ctx = useContext(ExpenseContext);
  if (!ctx) throw new Error("useExpenses must be used inside ExpenseProvider");
  return ctx;
};
