import { View, Text } from 'react-native'

interface ExpensesSummaryProps {
	periodName: string
	expenses: any
}

const ExpensesSummary = ({ periodName, expenses }: ExpensesSummaryProps) => {
	const expensesSum = expenses.reduce((sum: any, expense: any) => {
		return sum + expense.amount
	}, 0)

	return (
		<View>
			<Text>{periodName}</Text>
			<Text>${expensesSum.toFixed(2)}</Text>
		</View>
	)
}

export default ExpensesSummary
