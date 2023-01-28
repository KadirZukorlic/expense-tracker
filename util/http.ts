import axios from 'axios'
import { ExpenseItemProps } from '../types'

const BACKEND_URL = 'https://react-native-2ee11-default-rtdb.firebaseio.com'

export const storeExpense = (expenseData: ExpenseItemProps) => {
	axios.post(BACKEND_URL + '/expenses.json', expenseData)
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
