import axios from "axios";
import type { Expense } from "../types/expense";

const API_URL = "http://localhost:8000";

const API = axios.create({
  baseURL: "http://localhost:8000", // your FastAPI base
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

// GET /expenses -> Expense[]
export const getExpenses = () => API.get<Expense[]>("/Data");

// POST /expenses -> Expense
export const createExpense = async (expense: any) => {
  return await axios.post(`${API_URL}/Data`, expense);
};

// PUT /expenses/{id} -> Expense
export const updateExpense = (id: number, payload: Omit<Expense, "id">) =>
  API.put<Expense>(`/data/${id}`, payload);

// DELETE /expenses/{id}
export const deleteExpense = (id: number) => API.delete(`/Data/${id}`);





export const login = async (email: string, password: string) => {
  const res = await axios.post(`${API_URL}/login`, {
    username: email,
    password: password,
  });
  return res.data;
};