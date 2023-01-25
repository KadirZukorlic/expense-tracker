import { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ExpenseItemProps } from '../../types'
import { getFormattedDate } from '../../util/date'
import Button from '../UI/Button'
import Input from './Input'

type inputProps = {
	amount: string | number | any
	date: string | any
	description: string
}

type Props = {
	onCancel: () => void
	onSubmit: (expenseData: ExpenseItemProps) => void
	submitButtonLabel: string
	defaultValues: ExpenseItemProps | undefined
}

const ExpenseForm = ({
	onCancel,
	onSubmit,
	submitButtonLabel,
	defaultValues
}: Props) => {
	const [inputValues, setInputValues] = useState<inputProps>({
		amount: defaultValues ? defaultValues.amount.toString() : '',
		date: defaultValues ? getFormattedDate(defaultValues.date) : '',
		description: defaultValues ? defaultValues.description : ''
	})

	const inputChangedHandler = (
		inputIdentifier: string,
		enteredValue: string
	): void => {
		setInputValues((prevState: inputProps) => {
			return {
				...prevState,
				[inputIdentifier]: enteredValue
			}
		})
	}

	const submitHandler = () => {
		const expenseData = {
			amount: +inputValues.amount,
			date: new Date(inputValues.date),
			description: inputValues.description
		}

		onSubmit(expenseData)
	}

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					style={styles.rowInput}
					label="Amount"
					textInputConfig={{
						keyboardType: 'decimal-pad',
						onChangeText: inputChangedHandler.bind(this, 'amount'),
						value: inputValues.amount
					}}
				/>
				<Input
					label="Date"
					textInputConfig={{
						placeholder: 'YYYY-MM-DD',
						keyboardType: 'decimal-pad',
						maxLength: 10,
						onChangeText: inputChangedHandler.bind(this, 'date'),
						value: inputValues.date
					}}
				/>
			</View>
			<Input
				label="Description"
				textInputConfig={{
					multiline: true,
					// autoCapitalize: 'none'
					// autoCorrect: false // default is true
					onChangeText: inputChangedHandler.bind(this, 'description'),
					value: inputValues.description
				}}
			/>
			<View style={styles.buttonContainer}>
				<Button style={styles.button} mode="flat" onPress={onCancel}>
					Cancel
				</Button>
				<Button style={styles.button} onPress={submitHandler}>
					{submitButtonLabel}
				</Button>
			</View>
		</View>
	)
}

export default ExpenseForm

const styles = StyleSheet.create({
	form: {
		marginTop: 40
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		marginVertical: 24,
		textAlign: 'center'
	},
	inputsRow: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	rowInput: {
		flex: 1
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
