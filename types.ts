export type ExpenseItemProps = {
	id: string
	description: string
	amount: number
	date: Date
}

export type RootStackParamList = {
	AllExpenses: undefined
	RecentExpenses: undefined
	ExpensesOverview: undefined
	ManageExpense: {route: string}
}
