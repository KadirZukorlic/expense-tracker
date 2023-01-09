import { FlatList, Text } from 'react-native'
import { ExpenseItem } from '../../types'

function renderExpenseItem({ item }: { item: ExpenseItem }) {
	return <Text>{item.description}</Text>
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
