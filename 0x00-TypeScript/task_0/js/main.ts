interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'Scout',
    lastName: 'Curro',
    age: 22,
    location: 'Bay Area'
}

const student2: Student = {
    firstName: 'Scott',
    lastName: 'Curbo',
    age: 32,
    location: 'Atlantic Ocean'
}

const studentsList = [
    student1,
    student2
]

const table = document.createElement('table')
studentsList.forEach((student) => {
    let row = table.insertRow()
    for (let [k, v] of Object.entries(student)) {
        if (k === 'firstName' || k === 'location') {
            let cell = row.insertCell()
            let text = document.createTextNode(v)
            cell.appendChild(text)
        }
    }
})
document.body.appendChild(table)
