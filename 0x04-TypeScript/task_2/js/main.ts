interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}

class Director implements DirectorInterface {

    workFromHome(): string {
        return 'Working from home'
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
}

class Teacher implements TeacherInterface {

    workFromHome(): string {
        return 'Working from home'
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    }

    workTeacherTasks(): string {
        return 'Getting to work'
    }
}

interface createEmployeeInter {
    (salary: ( number | string)): (Director | Teacher);
}

const createEmployee: createEmployeeInter = (salary) => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: (Director | Teacher)) {
    return employee instanceof Director;
}


function executeWork(employee: (Director | Teacher)) {
    if (isDirector(employee)) {
      return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: string) {
    if (todayClass === 'Math') {
        return 'Teaching Math'
    } 
    if (todayClass === 'History') {
        return 'Teaching History'
    }
}