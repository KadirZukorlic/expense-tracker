import { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../components/UI/Button'
import IconButton from '../components/UI/IconButton'
import { GlobalStyles } from '../constants/styles'

const ManageExpense = ({ route, navigation }: any) => {
	const editedExpenseId = route.params?.expenseId
	const isEditing = !!editedExpenseId

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? 'Edit Expense' : 'Add Expense'
		})
	}, [navigation, isEditing])

	const deleteExpenseHandler = () => {
		navigation.goBack()
	}

	const cancelHandler = () => {
		navigation.goBack()
	}

	const confirmHandler = () => {
		navigation.goBack()
	}

	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				<Button style={styles.button} mode="flat" onPress={cancelHandler}>
					Cancel
				</Button>
				<Button style={styles.button} onPress={confirmHandler}>
					{isEditing ? 'Update' : 'Add'}
				</Button>
			</View>
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
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
})
