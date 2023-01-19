import { View, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

interface ExpensesOutputProps {
	expenses?: any
	expensesPeriod: string
}

const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
			<ExpensesList expenses={expenses} />
		</View>
	)
}

export default ExpensesOutput

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 0,
		backgroundColor: GlobalStyles.colors.primary700
	}
})
