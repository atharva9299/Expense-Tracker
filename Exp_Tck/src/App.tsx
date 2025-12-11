import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddExpense from "./pages/ADDExpense";
import ListExpenses from "./pages/ListExpenses";
import { ExpenseProvider } from "./context/ExpenseContext";
import AuthProvider from "./context/AuthProvider";
import Footer from "./components/Footer";
import LoginPage from "./pages/Login";

export default function App() {
  return (
    <AuthProvider>
      <ExpenseProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/list" element={<ListExpenses />} />
        </Routes>
        <Footer />
      </ExpenseProvider>
    </AuthProvider>
  );
}
