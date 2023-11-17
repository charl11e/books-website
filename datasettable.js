//Generate table for full data set (Frisch, 2017) (W3Schools, 2023l)
function tb() {
    let table = document.createElement('table');
    
    table.insertRow();
    let newCellMain1 = table.rows[table.rows.length - 1].insertCell();
    newCellMain1.style = "font-weight:bold; font-size:20px"
    newCellMain1.textContent = "Title"
    
    let newCellMain2 = table.rows[table.rows.length - 1].insertCell();
    newCellMain2.style = "font-weight:bold; font-size:20px"
    newCellMain2.textContent = "Author(s)"

    let newCellMain3 = table.rows[table.rows.length - 1].insertCell();
    newCellMain3.style = "font-weight:bold; font-size:20px"
    newCellMain3.textContent = "ISBN"
    
    for (let i=0; i< books.length-1; i++) {
        table.insertRow();
        let newCell1 = table.rows[table.rows.length - 1].insertCell();
        newCell1.textContent = books[i].title;
        let newCell2 = table.rows[table.rows.length - 1].insertCell();
        newCell2.textContent = books[i].authors;
        let newCell3 = table.rows[table.rows.length - 1].insertCell();
        newCell3.textContent = books[i].isbn
    };
    
    document.getElementById('tabledata').appendChild(table);
};


//Generate table for search results (Frsich, 2017) (W3Schools, 2023l) (MDN Web Docs, 2023b)
function tbsearch () {
    var searchhits = sessionStorage.getItem("search")
    if (searchhits.length == 0) {
        document.getElementById('tabledatasearch').innerHTML = "Nothing found";
    }

    else {
        let searchtable = document.createElement('table');

        searchtable.insertRow();
        let newCellMain1 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain1.style = "font-weight:bold; font-size:20px"
        newCellMain1.textContent = "Title"

        let newCellMain2 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain2.style = "font-weight:bold; font-size:20px"
        newCellMain2.textContent = "Author(s)"
    
        let newCellMain3 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain3.style = "font-weight:bold; font-size:20px"
        newCellMain3.textContent = "ISBN"

        for (let i=0; i< books.length-1; i++) {
            if (searchhits.includes(books[i].isbn)) {
                searchtable.insertRow();
                let newCell1 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell1.textContent = books[i].title;
                let newCell2 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell2.textContent = books[i].authors;
                let newCell3 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell3.textContent = books[i].isbn
            }
        };

        document.getElementById('tabledatasearch').appendChild(searchtable);
    }
}