//Generate table for full data set (Frisch, 2017) (W3Schools, 2023l)
function tb() {
    let table = document.createElement('table');
    for (let i=0; i< books.length-1; i++) {
        table.insertRow();
        let newCell1 = table.rows[table.rows.length - 1].insertCell();
        newCell1.textContent = books[i].title;
        let newCell2 = table.rows[table.rows.length - 1].insertCell();
        newCell2.textContent = books[i].authors;
        let newCell3 = table.rows[table.rows.length - 1].insertCell();
    };
    document.getElementById('tabledata').appendChild(table);
};