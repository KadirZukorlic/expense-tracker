import { FlatList } from 'react-native'
import { ExpenseItemProps } from '../../types'
import ExpenseItem from './ExpenseItem'

function renderExpenseItem({ item }: { item: ExpenseItemProps }) {
	return <ExpenseItem {...item} />
}

const ExpensesList = ({ expenses }: { expenses: any }) => {
	return (
		<FlatList
			data={expenses}
			renderItem={renderExpenseItem}
			keyExtractor={(item) => item.id}
		/>
	)
}

export default ExpensesList
