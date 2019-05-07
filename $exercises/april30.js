



// let determineTotal = function() {


// }


console.log('-----$April 30')
console.log(people)


determineTotal(people, function(item){
		if (item.age>=0){
		console.log(item.fname, item.age)
		}
		}
		);

console.log('-----totalAges')
const totalOfAges2 = toTotalAges(people.age);
console.log("The total of all staff ages is ",totalOfAges2)

console.log('-----averageAges')
const averageOfAges2 = toAverageAges(people.age);
console.log("The average of all staff ages is ",averageOfAges2.toFixed(1))

let tot2 = people.reduce(condition2, 0);
console.log(tot2);
