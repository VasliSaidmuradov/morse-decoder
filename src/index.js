const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

const splitString = (str, num) => {
	let res = []
	const re = /^0*/g
	for (let i = 0; i < str.length; i += num) {
		res.push(str.slice(i, i + num).replace(re, ''))
	}
	return res
}

function decode(expr) {
	let res = splitString(expr, 10)

	res = res.map(el => {
		if (el.includes('*')) return el = ' '
		let tmp = []
		tmp = splitString(el, 2)
		tmp = tmp.map(el => el === '11' ? '-' : '.')
		return tmp.join('')
	})

	res = res.map(el => MORSE_TABLE[el] ? MORSE_TABLE[el] : el)
	return res.join('')
}

module.exports = {
	decode
}