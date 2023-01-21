import { useContext, useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import ExpenseForm from '../components/ManageExpense/ExpenseForm'
import Button from '../components/UI/Button'
import IconButton from '../components/UI/IconButton'
import { GlobalStyles } from '../constants/styles'
import { ExpensesContext } from '../store/expenses-context'
import { ExpenseItemProps } from '../types'

const ManageExpense = ({ route, navigation }: any) => {
	const expenseCtx = useContext(ExpensesContext)

	const editedExpenseId = route.params?.expenseId
	const isEditing = !!editedExpenseId

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? 'Edit Expense' : 'Add Expense'
		})
	}, [navigation, isEditing])

	const deleteExpenseHandler = () => {
		expenseCtx.deleteExpense(editedExpenseId)
		navigation.goBack()
	}

	const cancelHandler = () => {
		navigation.goBack()
	}

	const confirmHandler = (expenseData: ExpenseItemProps) => {
		if (isEditing) {
			expenseCtx.updateExpense(editedExpenseId, expenseData)
		} else {
			expenseCtx.addExpense(expenseData)
		}

		navigation.goBack()
	}

	return (
		<View style={styles.container}>
			<ExpenseForm
				submitButtonLabel={isEditing ? 'Update' : 'Add'}
				onSubmit={confirmHandler}
				onCancel={cancelHandler}
			/>
			{isEditing && (
				<View style={styles.deleteContainer}>
					<IconButton
						icon="trash"
						color={GlobalStyles.colors.error500}
						size={24}
						onPress={deleteExpenseHandler}
					/>
				</View>
			)}
		</View>
	)
}

export default ManageExpense

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary800
	},
	deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GlobalStyles.colors.primary200,
		alignItems: 'center'
	}
})
