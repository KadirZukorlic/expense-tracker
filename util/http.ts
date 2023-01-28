import axios, { Axios } from 'axios'
import { ExpenseItemProps } from '../types'

const BACKEND_URL = 'https://react-native-2ee11-default-rtdb.firebaseiocom'

export const storeExpense = async (expenseData: ExpenseItemProps) => {
	const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData)
	const id = response.data.name
	return id
}

export const fetchExpenses = async () => {
	const response = await axios.get(BACKEND_URL + '/expenses.json')
	const expenses: Array<ExpenseItemProps> = []

	for (const key in response.data) {
		const expenseObj = {
			id: key,
			amount: response.data[key].amount,
			date: new Date(response.data[key].date),
			description: response.data[key].description
		}
		expenses.push(expenseObj)
	}
	return expenses
}

export const updateExpense = (id: string, expenseData: ExpenseItemProps) => {
	return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData)
}

export const deleteExpense = (id: string) => {
	return axios.delete(BACKEND_URL + `/expenses/${id}.json`)
}
