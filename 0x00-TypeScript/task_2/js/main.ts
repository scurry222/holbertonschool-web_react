interface DirectorInterface {
    workFromHome: string,
    getCoffeeBreak: string,
    workDirectorTasks: string
}

interface TeacherInterface {
    workFromHome: string,
    getCoffeeBreak: string,
    workTeacherTasks: string
}

class Director {
    public workFromHome = () => `Working from home`

    public getToWork = () => `Getting a coffee break`

    public workDirectorTasks = () => `Getting to director tasks`

}

class Teacher {
    public workFromHome = () => `Cannot work from home`

    public getCoffeeBreak = () => `Cannot have a break`

    public workTeacherTasks = () => `Getting to work`

}

const createEmployee = (
    firstName: string, lastName: string, salary: string | number
) => {
    if (typeof salary === 'string' && salary[0] === '$')
        salary = salary.slice(1)
    if (Number(salary) < 500) return new Teacher
    else return new Director
}

const isDirector = (employee: Director | Teacher) => {
    if ((employee as Teacher).workTeacherTasks)
        return (employee as Teacher).workTeacherTasks()
    else return (employee as Director).workDirectorTasks()
}

type Subjects = 'Math' | 'History'

const teachClass = (todayClass: Subjects) =>
    todayClass === 'Math' ? 'Teaching Math' : 'Teaching History'

// console.log(createEmployee('Guillaume', 'Salva', 200));
// console.log(createEmployee('John', 'Doe', 1000));
// console.log(createEmployee('Gerard', 'Zuck', '$500'));
