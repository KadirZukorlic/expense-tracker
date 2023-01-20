import { View, TextInput, Text } from 'react-native'
import { InputProps } from '../../types'

const Input = ({ label, textInputConfig }: InputProps) => {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput {...textInputConfig} />
		</View>
	)
}

export default Input
