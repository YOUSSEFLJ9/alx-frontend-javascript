interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
    }

    //interface Director extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;    
}
//function printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the function (NOT anonymous, NO destructuring)
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Example usage
const teacherName: printTeacherFunction = printTeacher;
console.log(teacherName("John", "Doe")); // J. Doe

class StudentClass {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Getter for firstName
    get firstName(): string {
        return this._firstName;
    }

    // Getter for lastName
    get lastName(): string {
        return this._lastName;
    }

    // Method to work on homework
    workOnHomework(): string {
        return "Currently working";
    }

    // Method to display the name
    displayName(): string {
        return this.firstName;
    }
}
// Example usage
const student = new StudentClass("Jane", "Doe");
console.log(student.displayName()); // Jane
console.log(student.workOnHomework()); // Currently working
export { printTeacher, StudentClass, Teacher, Directors, printTeacherFunction };