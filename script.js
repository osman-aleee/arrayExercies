// Arrays Exercies
// Exercies No 1
function arrayFromRange(min, max) {
	const output = [];

	for (let i = min; i <= max; i++) {
		output.push(i)
	}
	return output
	
}

const myArr = arrayFromRange(-10, 10);
console.log(myArr)

// Exercies No 2
function includes(array, searchElement) {

	for(let item of array)
		if(item === searchElement)
			return true;
	return false;

}

const checkArr = includes([1,2,3,4], 3)
console.log(checkArr)

// Exercies No 3
function except(array, excluded) {
	const output = []
	for( let element of array)
		if (!excluded.includes(element))
			output.push(element)
	return output
}

const removeItemFromArr = except([1,2,3,4], [2,3])
console.log(removeItemFromArr)

// Exercies No 4
function move(array, index, offset) {
	let position = index + offset

	if (position >= array.length || position < 0) {
		console.error("Invalid Offset")
		return
	}

	const output = [...array]
	const element = output.splice(index, 1)[0]
	output.splice(position, 0 , element)

	return output;
}

const moveEle = move([1,2,3,4], 0, 2)
console.log(moveEle)

// Exercies No 5
function countOccurence (array, searchElement) {
	return array.reduce(function(accumulator, current) {
		const occurence = (current === searchElement) ? 1 : 0
		return accumulator + occurence
	}, 0)
}

const OccurenceArr = countOccurence([1,2,3,4,1], 1)
console.log(OccurenceArr)

// Exercies No 6
function getMax(array) {
	if (array.length === 0) return undefined;
	return array.reduce((a, b) => a > b ? a : b)
}

const maxNumber = getMax([1, 2, 3, 4])
console.log(maxNumber)

// Exercies No 7
const movies = [
	{title:"a", year: 2018, rating:4.5},
	{title:"b", year: 2018, rating:4.7},
	{title:"c", year: 2018, rating:3},
	{title:"d", year: 2017, rating:4.5},

]

const titles = movies.filter(m => m.year === 2018 && m.rating >=4.5)
		.sort((a,b) => a.rating - b.rating)
		.reverse()
		.map(m => m.title)

console.log(titles)
