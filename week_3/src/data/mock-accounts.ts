import type { Transaction } from "../components/account-screen";

export const checkingTransactions: Transaction[] = [
  {
    id: "checking-1",
    merchant: "Direct Deposit",
    date: "Sep 20",
    category: "Income",
    amount: 2450,
  },
  {
    id: "checking-2",
    merchant: "Corner Market",
    date: "Sep 19",
    category: "Groceries",
    amount: -84.27,
  },
  {
    id: "checking-3",
    merchant: "Metro Transit",
    date: "Sep 18",
    category: "Transportation",
    amount: -22.5,
  },
  {
    id: "checking-4",
    merchant: "Northside Coffee",
    date: "Sep 17",
    category: "Dining",
    amount: -6.85,
  },
  {
    id: "checking-5",
    merchant: "City Utilities",
    date: "Sep 15",
    category: "Bills",
    amount: -143.62,
  },
  {
    id: "checking-6",
    merchant: "Streaming Service",
    date: "Sep 14",
    category: "Entertainment",
    amount: -15.99,
  },
];

export const savingsTransactions: Transaction[] = [
  {
    id: "savings-1",
    merchant: "Transfer from Checking",
    date: "Sep 20",
    category: "Automatic savings",
    amount: 250,
  },
  {
    id: "savings-2",
    merchant: "Monthly Interest",
    date: "Sep 1",
    category: "Interest",
    amount: 42.18,
  },
  {
    id: "savings-3",
    merchant: "Transfer from Checking",
    date: "Aug 20",
    category: "Automatic savings",
    amount: 250,
  },
  {
    id: "savings-4",
    merchant: "Emergency Fund Withdrawal",
    date: "Aug 12",
    category: "Transfer",
    amount: -500,
  },
  {
    id: "savings-5",
    merchant: "Monthly Interest",
    date: "Aug 1",
    category: "Interest",
    amount: 41.76,
  },
];
