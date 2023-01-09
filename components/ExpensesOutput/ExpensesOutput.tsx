import { View, FlatList, Text } from 'react-native'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

interface ExpensesOutputProps {
	expenses: any
	expensesPeriod: string
}

const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
	return (
		<View>
			<ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
			<ExpensesList />
		</View>
	)
}

export default ExpensesOutput
