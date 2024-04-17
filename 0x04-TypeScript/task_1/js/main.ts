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
