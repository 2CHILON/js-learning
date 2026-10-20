const student = {
    name: "Brian",
    year: 3,
    skills: ["java", "Go"],
    greet() { return `I'm ${this.name}`; },

};

nums = []

student.name;
student["year"];
student.gpa = 3.8;
delete student.year;

Object.keys(student)
Object.values(student);
Object.entries(student);

const {name, skills} = student;
const [first, second] = [ 10, 20, 30];

const copy = { ...student, year: 4};
const more = [...nums, 99];