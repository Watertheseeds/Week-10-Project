let id = 0;

//lines 4-8 allow you to log the info.
document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-chore').value;
    row.insertCell(1).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(2).innerHTML = document.getElementById('new-notes').value;
    //Lines 8- 16 takes in info logged in and registers it in the table
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-chore').value = '';
    row.removeCell('').innerHTML
    //lines 12-15 add a delete button after you finish a chore
});
//Lines 20 - 28 have the delete button delete rows that were appended to the table
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}