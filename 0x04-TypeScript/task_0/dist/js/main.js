var student1 = {
    firstName: 'Younes',
    lastName: 'Bousfiha',
    age: 27,
    location: 'CasaBlanca'
};
var student2 = {
    firstName: 'Hassan',
    lastName: 'bouchta',
    age: 22,
    location: 'CasaBlanca'
};
var studentsList = [student1, student2];
function renderTable() {
    var container = document.getElementById("container");
    var info = ['Name', 'Location'];
    // Create table element and apply Tailwind classes
    var table = document.createElement('table');
    table.classList.add('min-w-full', 'divide-y', 'divide-gray-200');
    // Create table header row
    var titleHolder = document.createElement('tr');
    titleHolder.classList.add('bg-gray-50');
    info.forEach(function (item) {
        var title = document.createElement('th');
        title.textContent = item;
        title.classList.add('px-6', 'py-3', 'text-center', 'text-2xl', 'font-medium', 'text-gray-500', 'uppercase', 'tracking-wider', 'border-solid', 'border-2');
        titleHolder.appendChild(title);
    });
    // Append table header row to table
    table.appendChild(titleHolder);
    // Append table to container
    container.appendChild(table);
    // Populate table with student data
    studentsList.forEach(function (student) {
        var cellholder = document.createElement('tr');
        var nameCell = document.createElement('td');
        nameCell.textContent = student.firstName;
        nameCell.classList.add('px-6', 'py-4', 'text-center', 'whitespace-nowrap', 'text-lg', 'text-gray-900', 'border-solid', 'border-2');
        var locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        locationCell.classList.add('px-6', 'py-4', 'text-center', 'whitespace-nowrap', 'text-lg', 'text-gray-900', 'border-solid', 'border-2');
        cellholder.appendChild(nameCell);
        cellholder.appendChild(locationCell);
        table.appendChild(cellholder);
    });
}
renderTable();
//# sourceMappingURL=main.js.map