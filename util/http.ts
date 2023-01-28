import axios from 'axios'
import { ExpenseItemProps } from '../types'

export const storeExpense = (expenseData: ExpenseItemProps) => {
	axios.post(
		'https://react-native-2ee11-default-rtdb.firebaseio.com/expenses.json',
		expenseData
	)
}
