// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// Initialize variables to count total number of each grade
var numA = 0;
var numB = 0;
var numC = 0;
var numD = 0;
var numF = 0;

// Initialize lowest grade and highest grade variables
// Give them initial value of first score
// Will work with array of length 1
var lowGrade = scores[0];
var highGrade = scores[0];

// Loop through array
for (var i = 0; i < scores.length; i++) {
	// incriment counter for each grade
	if (scores[i] >= 91) {numA++};
	if (scores[i] >= 81 && scores[i] <= 90) {numB++};
	if (scores[i] >= 71 && scores[i] <= 80) {numC++};
	if (scores[i] >= 61 && scores[i] <= 70) {numD++};
	if (scores[i] <= 60) {numF++};

	// Test for new highest or new lowest grade
	if (scores[i] > highGrade) {highGrade = scores[i]}
	if (scores[i] < lowGrade) {lowGrade = scores[i]}
}

// Output results
console.log("The number of As is: " + numA);
console.log("The number of Bs is: " + numB);
console.log("The number of Cs is: " + numC);
console.log("The number of Ds is: " + numD);
console.log("The number of Fs is: " + numF);

console.log("The highest grade is: " + highGrade);
console.log("The lowest grade is: " + lowGrade);









