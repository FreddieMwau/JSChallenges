// Create a class called FourthYearStudent. Add a constructor to it, the constructor takes arguments for the name,
// age and unit properties and initializes them. Add a static method called getYearOfStudy that returns the value 4. 
// Add another method called getStudentAge that returns the age of a particular student(instance). Create a new instance of FourthYearStudent with a name(string), age(number) and 
// units (an array of strings. The strings are the units that the student is taking throughout the semeter).
// Log the student's properties to the console. Call the getStudentAge method on the instance.
// Work on the above challenge to practise what we covered in the morning lesson

class FourthYearStudent{
    constructor(name, age, units) {
        this.name = name;
        this.age = age;
        this.units = units;
    }

    static getYearOfStudy() {
        return 4;
    }

    getStudentAge() {
        return this.age;
    }
}

const student1 = new FourthYearStudent("Jane Doe", 34, [
    "Cyber Security",
    "Software Development",
    "Workflow Architecture"
]);

console.log(student1.name);
console.log(student1.age);
console.log(student1.units);
console.log(FourthYearStudent.getYearOfStudy());

console.log(student1.getStudentAge());