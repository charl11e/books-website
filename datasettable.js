//Generate basic table for full data set (Frisch, 2017) (W3Schools, 2023l)
function tbbasic() {
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
    
    document.getElementById('tabledatabasic').appendChild(table);
};

//Generate detailed table for full data set (Frisch, 2017) (W3Schools, 2023l)
function tbdetailed() {
    document.getElementById('tabledatadetailed').innerHTML = "";
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

    let newCellMain4 = table.rows[table.rows.length - 1].insertCell();
    newCellMain4.style = "font-weight:bold; font-size:20px"
    newCellMain4.textContent = "ISBN-13"

    let newCellMain5 = table.rows[table.rows.length - 1].insertCell();
    newCellMain5.style = "font-weight:bold; font-size:20px"
    newCellMain5.textContent = "Language Code"

    let newCellMain6 = table.rows[table.rows.length - 1].insertCell();
    newCellMain6.style = "font-weight:bold; font-size:20px"
    newCellMain6.textContent = "Average Rating"

    let newCellMain7 = table.rows[table.rows.length - 1].insertCell();
    newCellMain7.style = "font-weight:bold; font-size:20px"
    newCellMain7.textContent = "Num. Ratings"

    let newCellMain8 = table.rows[table.rows.length - 1].insertCell();
    newCellMain8.style = "font-weight:bold; font-size:20px"
    newCellMain8.textContent = "Num. Reviews"

    let newCellMain9 = table.rows[table.rows.length - 1].insertCell();
    newCellMain9.style = "font-weight:bold; font-size:20px"
    newCellMain9.textContent = "Publication Date"

    let newCellMain10 = table.rows[table.rows.length - 1].insertCell();
    newCellMain10.style = "font-weight:bold; font-size:20px"
    newCellMain10.textContent = "Publisher"

    let newCellMain11 = table.rows[table.rows.length - 1].insertCell();
    newCellMain11.style = "font-weight:bold; font-size:20px"
    newCellMain11.textContent = "Num. Pages"

    let newCellMain12 = table.rows[table.rows.length - 1].insertCell();
    newCellMain12.style = "font-weight:bold; font-size:20px"
    newCellMain12.textContent = "Book ID"
    
    for (let i=0; i< books.length-1; i++) {
        table.insertRow();
        let newCell1 = table.rows[table.rows.length - 1].insertCell();
        newCell1.textContent = books[i].title;
        let newCell2 = table.rows[table.rows.length - 1].insertCell();
        newCell2.textContent = books[i].authors;
        let newCell3 = table.rows[table.rows.length - 1].insertCell();
        newCell3.textContent = books[i].isbn
        let newCell4 = table.rows[table.rows.length - 1].insertCell();
        newCell4.textContent = books[i].isbn13
        let newCell5 = table.rows[table.rows.length - 1].insertCell();
        newCell5.textContent = books[i].language_code
        let newCell6 = table.rows[table.rows.length - 1].insertCell();
        newCell6.textContent = books[i].average_rating
        let newCell7 = table.rows[table.rows.length - 1].insertCell();
        newCell7.textContent = books[i].ratings_count
        let newCell8 = table.rows[table.rows.length - 1].insertCell();
        newCell8.textContent = books[i].text_reviews_count
        let newCell9 = table.rows[table.rows.length - 1].insertCell();
        newCell9.textContent = books[i].publication_date
        let newCell10 = table.rows[table.rows.length - 1].insertCell();
        newCell10.textContent = books[i].publisher
        let newCell11 = table.rows[table.rows.length - 1].insertCell();
        newCell11.textContent = books[i].num_pages
        let newCell12 = table.rows[table.rows.length - 1].insertCell();
        newCell12.textContent = books[i].bookID
    };
    
    document.getElementById('tabledatadetailed').appendChild(table);
};

//Generate basic table for search results (Frsich, 2017) (W3Schools, 2023l) (MDN Web Docs, 2023b)
function tbsearchbasic () {
    var searchhits = sessionStorage.getItem("search")
    if (searchhits.length == 0) {
        document.getElementById('tabledatasearchbasic').innerHTML = "Nothing found";
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

        document.getElementById('tabledatasearchbasic').appendChild(searchtable);
    }
}

//Generate detailed table for search results (Frsich, 2017) (W3Schools, 2023l) (MDN Web Docs, 2023b)
function tbsearchdetailed () {
    var searchhits = sessionStorage.getItem("search")
    if (searchhits.length == 0) {
        document.getElementById('tabledatasearchdetailed').innerHTML = "Nothing found";
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

        let newCellMain4 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain4.style = "font-weight:bold; font-size:20px"
        newCellMain4.textContent = "ISBN-13"

        let newCellMain5 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain5.style = "font-weight:bold; font-size:20px"
        newCellMain5.textContent = "Language Code"

        let newCellMain6 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain6.style = "font-weight:bold; font-size:20px"
        newCellMain6.textContent = "Average Rating"

        let newCellMain7 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain7.style = "font-weight:bold; font-size:20px"
        newCellMain7.textContent = "Num. Ratings"

        let newCellMain8 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain8.style = "font-weight:bold; font-size:20px"
        newCellMain8.textContent = "Num. Reviews"

        let newCellMain9 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain9.style = "font-weight:bold; font-size:20px"
        newCellMain9.textContent = "Publication Date"

        let newCellMain10 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain10.style = "font-weight:bold; font-size:20px"
        newCellMain10.textContent = "Publisher"

        let newCellMain11 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain11.style = "font-weight:bold; font-size:20px"
        newCellMain11.textContent = "Num. Pages"

        let newCellMain12 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain12.style = "font-weight:bold; font-size:20px"
        newCellMain12.textContent = "Book ID"

        for (let i=0; i< books.length-1; i++) {
            if (searchhits.includes(books[i].isbn)) {
                searchtable.insertRow();
                let newCell1 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell1.textContent = books[i].title;
                let newCell2 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell2.textContent = books[i].authors;
                let newCell3 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell3.textContent = books[i].isbn
                let newCell4 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell4.textContent = books[i].isbn13
                let newCell5 = searchtable.rows[searchtable.rows.length - 1].insertCell();  
                newCell5.textContent = books[i].language_code
                let newCell6 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell6.textContent = books[i].average_rating
                let newCell7 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell7.textContent = books[i].ratings_count
                let newCell8 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell8.textContent = books[i].text_reviews_count
                let newCell9 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell9.textContent = books[i].publication_date
                let newCell10 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell10.textContent = books[i].publisher
                let newCell11 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell11.textContent = books[i].num_pages
                let newCell12 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell12.textContent = books[i].bookID

            }
        };

        document.getElementById('tabledatasearchdetailed').appendChild(searchtable);
    }
}
