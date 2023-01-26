import React from 'react'
import { TextInputProps } from 'react-native'
import { ViewStyle } from 'react-native'

export type ExpenseItemProps = {
	id?: string
	description: string
	amount: number
	date: Date
}

export type RootStackParamList = {
	AllExpenses: undefined
	RecentExpenses: undefined
	ExpensesOverview: undefined
	ManageExpense: { route: string }
}

export type ButtonProps = {
	children: React.ReactNode
	onPress: () => void
	mode?: 'flat' | undefined
	style?: ViewStyle
}

export type InputProps = {
	label: string
	textInputConfig?: TextInputProps
	style?: ViewStyle
	invalid: boolean
}
