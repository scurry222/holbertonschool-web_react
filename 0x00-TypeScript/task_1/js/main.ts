interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    firstName: string,
    lastName: string
}

function printTeacher(teacher: printTeacherFunction) {
    return `${teacher.firstName[0]}. ${teacher.lastName}`
}

interface studentClass {
    firstName: string
    lastName: string
}

class studentClass {
    Constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    public workOnHomework = () => `Currently working`

    public displayName = () => this.firstName
}

// const teacher1: Teacher = {
//     firstName: 'John',
//     fullTimeEmployee: false,
//     lastName: 'Doe',
//     location: 'London',
//     contract: false,
// };

// console.log('teacher1', teacher1);
  
// console.log('Teacher: ', printTeacher({firstName: 'Joe', lastName: 'Carp'}))

// const director1: Directors = {
//     firstName: 'John',
//     lastName: 'Doe',
//     location: 'London',
//     fullTimeEmployee: true,
//     numberOfReports: 17,
// };

// console.log('director1: ', director1);
