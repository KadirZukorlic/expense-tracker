import React, { createContext, useReducer } from 'react'
import { ExpenseItemProps } from '../types'

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		description: 'A pair of shoes',
		amount: 59.99,
		date: new Date('2023-01-18')
	},
	{
		id: 'e2',
		description: 'A pair of trousers',
		amount: 89.29,
		date: new Date('2022-01-15')
	},
	{
		id: 'e3',
		description: 'Some bananas',
		amount: 5.99,
		date: new Date('2022-12-05')
	},
	{
		id: 'e4',
		description: 'A Book',
		amount: 14.99,
		date: new Date('2022-12-31')
	},
	{
		id: 'e5',
		description: 'Another Book',
		amount: 19.99,
		date: new Date('2023-01-09')
	},
	{
		id: 'e6',
		description: 'A pair of trousers',
		amount: 89.29,
		date: new Date('2022-01-15')
	},
	{
		id: 'e7',
		description: 'A Book',
		amount: 14.99,
		date: new Date('2022-12-31')
	},
	{
		id: 'e8',
		description: 'Another Book',
		amount: 19.99,
		date: new Date('2023-01-09')
	}
]

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, { description, amount, date }) => {}
})

const expensesReducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			const id = new Date().toString() + Math.random().toString()
			return [{ ...action.payload, id: id }, ...state]
		case 'UPDATE':
			const updatableExpenseIndex = state.findIndex(
				(expense) => expense.id === action.payload.id
			)
			const updatableExpense = state[updatableExpenseIndex]
			const updateItem = { ...updatableExpense, ...action.payload.data }
			const updatedExpenses = [...state]
			updatedExpenses[updatableExpenseIndex] = updateItem
			return updatedExpenses
		case 'DELETE':
			return state.filter((item) => item.id !== action.payload.id)
		default:
			return state
	}
}

const ExpensesContextProvider = ({ children }) => {
	const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

	const addExpense = (expenseData) => {
		dispatch({ type: 'ADD', payload: expenseData })
	}

	const deleteExpense = (id) => {
		dispatch({ type: 'DELETE', payload: id })
	}

	const updateExpense = (id, expenseData) => {
		dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
	}

	const value = {
		expenses: expensesState,
		addExpense: addExpense,
		deleteExpense: deleteExpense,
		updateExpense: updateExpense
	}

	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	)
}

export default ExpensesContextProvider
