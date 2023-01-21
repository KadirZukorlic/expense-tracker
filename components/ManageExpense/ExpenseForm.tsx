import { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Input from './Input'

type inputProps = {
	amount: string
	date: string
	description: string
}

const ExpenseForm = () => {
	const [inputValues, setInputValues] = useState<inputProps>({
		amount: '',
		date: '',
		description: ''
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
						maxLength: 10,
						onChangeText: inputChangedHandler.bind(this, 'date')
					}}
				/>
			</View>
			<Input
				label="Description"
				textInputConfig={{
					multiline: true,
					// autoCapitalize: 'none'
					// autoCorrect: false // default is true
					onChangeText: inputChangedHandler.bind(this, 'description')
				}}
			/>
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
	}
})
