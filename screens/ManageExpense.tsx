import { useContext, useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import ExpenseForm from '../components/ManageExpense/ExpenseForm'
import IconButton from '../components/UI/IconButton'
import { GlobalStyles } from '../constants/styles'
import { ExpensesContext } from '../store/expenses-context'
import { ExpenseItemProps } from '../types'
import { deleteExpense, storeExpense, updateExpense } from '../util/http'

const ManageExpense = ({ route, navigation }: any) => {
	const expenseCtx = useContext(ExpensesContext)

	const editedExpenseId = route.params?.expenseId
	const isEditing = !!editedExpenseId

	const selectedExpense = expenseCtx.expenses.find(
		(expense: ExpenseItemProps) => expense.id === editedExpenseId
	)

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? 'Edit Expense' : 'Add Expense'
		})
	}, [navigation, isEditing])

	const deleteExpenseHandler = async () => {
		await deleteExpense(editedExpenseId)
		expenseCtx.deleteExpense(editedExpenseId)
		navigation.goBack()
	}

	const cancelHandler = () => {
		navigation.goBack()
	}

	const confirmHandler = async (expenseData: ExpenseItemProps) => {
		if (isEditing) {
			expenseCtx.updateExpense(editedExpenseId, expenseData)
			await updateExpense(editedExpenseId, expenseData)
		} else {
			const id = await storeExpense(expenseData)
			expenseCtx.addExpense({ ...expenseData, id: id })
		}

		navigation.goBack()
	}

	return (
		<View style={styles.container}>
			<ExpenseForm
				submitButtonLabel={isEditing ? 'Update' : 'Add'}
				onSubmit={confirmHandler}
				onCancel={cancelHandler}
				defaultValues={selectedExpense}
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
