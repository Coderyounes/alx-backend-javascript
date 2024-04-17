interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

const student1: Student = {
    firstName: 'Younes',
    lastName: 'Bousfiha',
    age: 27,
    location: 'CasaBlanca'
}

const student2: Student = {
    firstName: 'Hassan',
    lastName: 'bouchta',
    age: 22,
    location: 'CasaBlanca'
}

const studentsList: Array<Student> = [student1, student2]



function renderTable() {
    const container = document.getElementById("container");
    const info = ['Name', 'Location'];

    const table = document.createElement('table');
    table.classList.add('min-w-full', 'divide-y', 'divide-gray-200');

    const titleHolder = document.createElement('tr');
    titleHolder.classList.add('bg-gray-50');
    info.forEach((item) => {
        const title = document.createElement('th');
        title.textContent = item;
        title.classList.add('px-6', 'py-3', 'text-center', 'text-2xl', 'font-medium', 'text-gray-500', 'uppercase', 'tracking-wider', 'border-solid', 'border-2');
        titleHolder.appendChild(title);
    });


    table.appendChild(titleHolder);

    container.appendChild(table);

    studentsList.forEach((student) => {
        const cellholder = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = student.firstName;
        nameCell.classList.add('px-6', 'py-4', 'text-center', 'whitespace-nowrap', 'text-lg', 'text-gray-900', 'border-solid', 'border-2');
        
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        locationCell.classList.add('px-6', 'py-4', 'text-center', 'whitespace-nowrap', 'text-lg', 'text-gray-900', 'border-solid', 'border-2');
        
        cellholder.appendChild(nameCell);
        cellholder.appendChild(locationCell);
        table.appendChild(cellholder);
    });
}

renderTable();