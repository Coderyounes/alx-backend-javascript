interface Teacher {
    readonly firstName: string
    readonly lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    [index: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    firstName: string;
    lastName: string;
}

function printTeacher(items: printTeacherFunction): string {
    return items.firstName[0] + "." + " " + items.lastName;
}

interface StudentConstructur {
    firstName: string
    lastName: string
}

interface IstudentClass {
    firstName: string
    lastName: string
    workOnHomework(): string;
    displayName(): string
}

class StudentClass implements IstudentClass {
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string ) {
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework(): string {
        return 'Currently working'
    }

    displayName(): string {
        return this.firstName
    }
}
