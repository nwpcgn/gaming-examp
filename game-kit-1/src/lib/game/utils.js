import { money, proofs, firstNum, combinatoricsNum } from './store'

// Returns a string representing `currency`. If `currency` is not recognized, returns '?'
export function currencyToString(c) {
	let result = '?'

	if (c === money) result = '$'
	else if (c === proofs) result = ' proofs'
	else if (c === firstNum) result = ' 1st '
	else if (c === combinatoricsNum) result = ' Combinatorics'

	return result
}
