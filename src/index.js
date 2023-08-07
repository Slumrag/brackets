function check(str, bracketsConfig) {
	const equalBrackets = bracketsConfig
		.filter((item) => item[0] === item[1])
		.map((item) => item[0]);
	const open = bracketsConfig.map((item) => item[0]);
	const closed = bracketsConfig.map((item) => item[1]);
	const stack = [];

	for (let index = 0; index < str.length; index++) {
		const element = str[index];
		if (open.includes(element)) {
			//if top stack element is the same as a new element and is open-closing bracket
			if (
				equalBrackets.includes(element) &&
				stack[stack.length - 1] === element
			) {
				stack.pop();
			} else stack.push(element);
			continue;
		}

		if (stack.length === 0) return false;

		if (closed.includes(element)) {
			let topBracket = stack.pop();
			if (open.indexOf(topBracket) !== closed.indexOf(element))
				return false;
		}
	}

	return stack.length === 0;
}

module.exports = check;
