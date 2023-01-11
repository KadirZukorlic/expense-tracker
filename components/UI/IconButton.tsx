import { Pressable, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface IconButtonProps {
	icon: any
	size: number
	color: string
	onPress: () => void
}

const IconButton = ({ icon, size, color, onPress }: IconButtonProps) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => pressed && styles.pressed}
		>
			<View style={styles.buttonContainer}>
				<Ionicons name={icon} size={size} color={color} />
			</View>
		</Pressable>
	)
}
export default IconButton

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 24,
		padding: 6,
		marginHorizontal: 8,
		marginVertical: 2
	},
	pressed: {
		opacity: 0.75
	}
})
