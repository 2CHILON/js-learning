// 1 create the array of student objects
const students = [
    { name: "Alice", score: 85},
    { name: "Bob", score: 92},
    { name: "Charlie", score: 78},
];
// 2. Calculate the total score to find the average
const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const averageScore = totalScore / students.length;

// 3. Find the student with the highest score
const topStudent = students.reduce((highest, current) => 
    current.score > highest.score ? current : highest
);

// 4 print the results
console.log("Average Score: " + averageScore.toFixed(2));
console.log("Top Student: " + topStudent.name);