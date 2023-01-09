import { View } from 'react-native'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

interface ExpensesOutputProps {
	expenses: any
	expensesPeriod: string
}

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		description: 'A pair of shoes',
		amount: 59.99,
		date: new Date('2023-01-10')
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
		date: new Date('2022-12-11')
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
	}
]

const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
	return (
		<View>
			<ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
			<ExpensesList expenses={DUMMY_EXPENSES}/>
		</View>
	)
}

export default ExpensesOutput
