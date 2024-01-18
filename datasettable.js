// This JS file contains the code that loads the tables for the full dataset and search results pages.
// I decided to add a full dataset page, so the user can simply view the dataset if needed.
// Furthermore, it is split into a 'basic' table and a 'detailed' table, the reason being that the detailed table contains extra details that may not be useful to the average user, so the basic table can be loaded more quickly.
// However, the detailed table is available to view with a dropdown if needed (but may be slow to load)

// Additionally, I decided to add a search function to the website, as I thought it would be useful to search for specific item(s) in the dataset if needed.
// To use it, the user needs to decide using the 'filter' button what parts of the book (i.e. title/author/isbn etc) they are searching for, and simply search for it using the search bar on the navbar.
// For similar reasons, the search function is split into two differemt tables aswell.
// The only limitations in the search function are that it is case sensitive and only searches for exact matches.

// Declare that books and sessionStorage are global variables for ESLint (ESLint, 2023a)
/* global books, sessionStorage */

// Check to see if data has been parsed AND DOM has loaded (this is incremented when the data is parsed, and when the DOM has loaded by calling the tbbasic() function), once it = 2, it is safe to load the tables
let check = 0;

// Generate basic table for full data set (Frisch, 2017) (W3Schools, 2023l)
/**
 * @function tbbasic
 * @description Generate basic table for full data set tab of website
 * @returns {void}
 */

// eslint-disable-next-line no-unused-vars -- Disabled as this function is called from another file
function tbbasic () {
    // Check to see if data has been parsed and DOM has been loaded
    if (check === 0) {
        check += 1;
    } else {
        // Create a table object, and insert the headers
        const table = document.createElement('table');

        table.insertRow();
        const newCellMain1 = table.rows[table.rows.length - 1].insertCell();
        newCellMain1.style = 'font-weight:bold; font-size:20px';
        newCellMain1.textContent = 'Title';

        const newCellMain2 = table.rows[table.rows.length - 1].insertCell();
        newCellMain2.style = 'font-weight:bold; font-size:20px';
        newCellMain2.textContent = 'Author(s)';

        const newCellMain3 = table.rows[table.rows.length - 1].insertCell();
        newCellMain3.style = 'font-weight:bold; font-size:20px';
        newCellMain3.textContent = 'ISBN';

        // Insert the data into the table
        for (let i = 0; i < books.length; i++) {
            table.insertRow();
            const newCell1 = table.rows[table.rows.length - 1].insertCell();
            newCell1.textContent = books[i].title;
            const newCell2 = table.rows[table.rows.length - 1].insertCell();
            newCell2.textContent = books[i].authors;
            const newCell3 = table.rows[table.rows.length - 1].insertCell();
            newCell3.textContent = books[i].isbn;
        };

        // Append the table to the page
        document.getElementById('tabledatabasic').appendChild(table);
    }
};

// Generate detailed table for full data set (Frisch, 2017) (W3Schools, 2023l)
/**
 * @function tbdetailed
 * @description Generate detailed table for full data set tab of website
 * @returns {void}
 */

// eslint-disable-next-line no-unused-vars -- Disabled as this function is called from another file
function tbdetailed () {
    document.getElementById('tabledatadetailed').innerHTML = '';
    // Create a table object, and insert the headers
    const table = document.createElement('table');

    table.insertRow();
    const newCellMain1 = table.rows[table.rows.length - 1].insertCell();
    newCellMain1.style = 'font-weight:bold; font-size:20px';
    newCellMain1.textContent = 'Title';

    const newCellMain2 = table.rows[table.rows.length - 1].insertCell();
    newCellMain2.style = 'font-weight:bold; font-size:20px';
    newCellMain2.textContent = 'Author(s)';

    const newCellMain3 = table.rows[table.rows.length - 1].insertCell();
    newCellMain3.style = 'font-weight:bold; font-size:20px';
    newCellMain3.textContent = 'ISBN';

    const newCellMain4 = table.rows[table.rows.length - 1].insertCell();
    newCellMain4.style = 'font-weight:bold; font-size:20px';
    newCellMain4.textContent = 'ISBN-13';

    const newCellMain5 = table.rows[table.rows.length - 1].insertCell();
    newCellMain5.style = 'font-weight:bold; font-size:20px';
    newCellMain5.textContent = 'Language Code';

    const newCellMain6 = table.rows[table.rows.length - 1].insertCell();
    newCellMain6.style = 'font-weight:bold; font-size:20px';
    newCellMain6.textContent = 'Average Rating';

    const newCellMain7 = table.rows[table.rows.length - 1].insertCell();
    newCellMain7.style = 'font-weight:bold; font-size:20px';
    newCellMain7.textContent = 'Num. Ratings';

    const newCellMain8 = table.rows[table.rows.length - 1].insertCell();
    newCellMain8.style = 'font-weight:bold; font-size:20px';
    newCellMain8.textContent = 'Num. Reviews';

    const newCellMain9 = table.rows[table.rows.length - 1].insertCell();
    newCellMain9.style = 'font-weight:bold; font-size:20px';
    newCellMain9.textContent = 'Publication Date';

    const newCellMain10 = table.rows[table.rows.length - 1].insertCell();
    newCellMain10.style = 'font-weight:bold; font-size:20px';
    newCellMain10.textContent = 'Publisher';

    const newCellMain11 = table.rows[table.rows.length - 1].insertCell();
    newCellMain11.style = 'font-weight:bold; font-size:20px';
    newCellMain11.textContent = 'Num. Pages';

    const newCellMain12 = table.rows[table.rows.length - 1].insertCell();
    newCellMain12.style = 'font-weight:bold; font-size:20px';
    newCellMain12.textContent = 'Book ID';

    // Insert the data into the table
    for (let i = 0; i < books.length; i++) {
        table.insertRow();
        const newCell1 = table.rows[table.rows.length - 1].insertCell();
        newCell1.textContent = books[i].title;
        const newCell2 = table.rows[table.rows.length - 1].insertCell();
        newCell2.textContent = books[i].authors;
        const newCell3 = table.rows[table.rows.length - 1].insertCell();
        newCell3.textContent = books[i].isbn;
        const newCell4 = table.rows[table.rows.length - 1].insertCell();
        newCell4.textContent = books[i].isbn13;
        const newCell5 = table.rows[table.rows.length - 1].insertCell();
        newCell5.textContent = books[i].languageCode;
        const newCell6 = table.rows[table.rows.length - 1].insertCell();
        newCell6.textContent = books[i].averageRating;
        const newCell7 = table.rows[table.rows.length - 1].insertCell();
        newCell7.textContent = books[i].ratingsCount;
        const newCell8 = table.rows[table.rows.length - 1].insertCell();
        newCell8.textContent = books[i].textReviewsCount;
        const newCell9 = table.rows[table.rows.length - 1].insertCell();
        newCell9.textContent = books[i].publicationDate;
        const newCell10 = table.rows[table.rows.length - 1].insertCell();
        newCell10.textContent = books[i].publisher;
        const newCell11 = table.rows[table.rows.length - 1].insertCell();
        newCell11.textContent = books[i].numPages;
        const newCell12 = table.rows[table.rows.length - 1].insertCell();
        newCell12.textContent = books[i].bookID;
    };

    // Append the table to the page
    document.getElementById('tabledatadetailed').appendChild(table);
};

// Generate basic table for search results (Frsich, 2017) (W3Schools, 2023l) (MDN Web Docs, 2023b)
/**
 * @function tbsearchbasic
 * @description Generate basic table for search results tab of website
 * @returns {void}
 */

// eslint-disable-next-line no-unused-vars -- Disabled as this function is called from another file
function tbsearchbasic () {
    // Check to see if data has been parsed and DOM has been loaded
    if (check === 0) {
        check += 1;
    } else {
        // Get search results from session storage, and check if there are any results
        const searchhits = sessionStorage.getItem('search');
        if (searchhits.length === 0) {
            document.getElementById('tabledatasearchbasic').innerHTML = 'Nothing found';
        } else {
            // If there are, create a table object, and insert the headers, then insert the data into the table
            const searchtable = document.createElement('table');

            searchtable.insertRow();
            const newCellMain1 = searchtable.rows[searchtable.rows.length - 1].insertCell();
            newCellMain1.style = 'font-weight:bold; font-size:20px';
            newCellMain1.textContent = 'Title';

            const newCellMain2 = searchtable.rows[searchtable.rows.length - 1].insertCell();
            newCellMain2.style = 'font-weight:bold; font-size:20px';
            newCellMain2.textContent = 'Author(s)';

            const newCellMain3 = searchtable.rows[searchtable.rows.length - 1].insertCell();
            newCellMain3.style = 'font-weight:bold; font-size:20px';
            newCellMain3.textContent = 'ISBN';

            for (let i = 0; i < books.length; i++) {
                if (searchhits.includes(books[i].isbn)) {
                    searchtable.insertRow();
                    const newCell1 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                    newCell1.textContent = books[i].title;
                    const newCell2 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                    newCell2.textContent = books[i].authors;
                    const newCell3 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                    newCell3.textContent = books[i].isbn;
                }
            };

            // Append the table to the page
            document.getElementById('tabledatasearchbasic').appendChild(searchtable);
        }
    }
}

// Generate detailed table for search results (Frsich, 2017) (W3Schools, 2023l) (MDN Web Docs, 2023b)
/**
 * @function tbsearchdetailed
 * @description Generate detailed table for search results tab of website
 * @returns {void}
 */

// eslint-disable-next-line no-unused-vars -- Disabled as this function is called from another file
function tbsearchdetailed () {
    // Get search results from session storage, and check if there are any results
    const searchhits = sessionStorage.getItem('search');
    if (searchhits.length === 0) {
        document.getElementById('tabledatasearchdetailed').innerHTML = 'Nothing found';
    } else {
        // If there are, create a table object, and insert the headers, then insert the data into the table
        const searchtable = document.createElement('table');

        searchtable.insertRow();
        const newCellMain1 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain1.style = 'font-weight:bold; font-size:20px';
        newCellMain1.textContent = 'Title';

        const newCellMain2 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain2.style = 'font-weight:bold; font-size:20px';
        newCellMain2.textContent = 'Author(s)';

        const newCellMain3 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain3.style = 'font-weight:bold; font-size:20px';
        newCellMain3.textContent = 'ISBN';

        const newCellMain4 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain4.style = 'font-weight:bold; font-size:20px';
        newCellMain4.textContent = 'ISBN-13';

        const newCellMain5 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain5.style = 'font-weight:bold; font-size:20px';
        newCellMain5.textContent = 'Language Code';

        const newCellMain6 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain6.style = 'font-weight:bold; font-size:20px';
        newCellMain6.textContent = 'Average Rating';

        const newCellMain7 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain7.style = 'font-weight:bold; font-size:20px';
        newCellMain7.textContent = 'Num. Ratings';

        const newCellMain8 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain8.style = 'font-weight:bold; font-size:20px';
        newCellMain8.textContent = 'Num. Reviews';

        const newCellMain9 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain9.style = 'font-weight:bold; font-size:20px';
        newCellMain9.textContent = 'Publication Date';

        const newCellMain10 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain10.style = 'font-weight:bold; font-size:20px';
        newCellMain10.textContent = 'Publisher';

        const newCellMain11 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain11.style = 'font-weight:bold; font-size:20px';
        newCellMain11.textContent = 'Num. Pages';

        const newCellMain12 = searchtable.rows[searchtable.rows.length - 1].insertCell();
        newCellMain12.style = 'font-weight:bold; font-size:20px';
        newCellMain12.textContent = 'Book ID';

        for (let i = 0; i < books.length; i++) {
            if (searchhits.includes(books[i].isbn)) {
                searchtable.insertRow();
                const newCell1 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell1.textContent = books[i].title;
                const newCell2 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell2.textContent = books[i].authors;
                const newCell3 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell3.textContent = books[i].isbn;
                const newCell4 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell4.textContent = books[i].isbn13;
                const newCell5 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell5.textContent = books[i].languageCode;
                const newCell6 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell6.textContent = books[i].averageRating;
                const newCell7 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell7.textContent = books[i].ratingsCount;
                const newCell8 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell8.textContent = books[i].textReviewsCount;
                const newCell9 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell9.textContent = books[i].publicationDate;
                const newCell10 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell10.textContent = books[i].publisher;
                const newCell11 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell11.textContent = books[i].numPages;
                const newCell12 = searchtable.rows[searchtable.rows.length - 1].insertCell();
                newCell12.textContent = books[i].bookID;
            }
        };

        // Append the table to the page
        document.getElementById('tabledatasearchdetailed').appendChild(searchtable);
    }
}
