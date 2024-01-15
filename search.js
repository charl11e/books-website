// This JS file contains the code that makes the search bar and filter work.
// When finding search results, the search function will search the dataset for the search term, and will add the ISBN of any book that matches the search term to an array
// The array is then stored in session storage (so it can be accessed later by the results page), and the user is redirected to the results page

// Declare that books and sessionStorage are global variables for ESLint (ESLint, 2023a)
/* global books, sessionStorage */

// Makes Search Bar Work (MDN Web Docs, 2023b)
/**
 * @function search
 * @description Searches the database for the search term
 * @returns {void}
 */

// eslint-disable-next-line no-unused-vars -- Disabled as this function is indeed called from the HTML files
function search () {
    const searchhits = [];
    const searchterm = document.getElementById('searchquery').value;

    if (document.getElementById('title').className === 'dropdown-item active') {
        for (let i = 0; i < books.length; i++) {
            if (searchterm === books[i].title) {
                searchhits.push(books[i].isbn);
            };
        };
    }

    if (document.getElementById('authors').className === 'dropdown-item active') {
        for (let i = 0; i < books.length; i++) {
            if (searchterm === books[i].authors) {
                searchhits.push(books[i].isbn);
            };
        };
    }

    if (document.getElementById('averageRating').className === 'dropdown-item active') {
        for (let i = 0; i < books.length; i++) {
            if (searchterm === books[i].averageRating) {
                searchhits.push(books[i].isbn);
            };
        };
    }

    if (document.getElementById('isbn').className === 'dropdown-item active') {
        for (let i = 0; i < books.length; i++) {
            if (searchterm === books[i].isbn) {
                searchhits.push(books[i].isbn);
            };
        };
    }

    if (document.getElementById('isbn13').className === 'dropdown-item active') {
        for (let i = 0; i < books.length; i++) {
            if (searchterm === books[i].isbn13) {
                searchhits.push(books[i].isbn);
            };
        };
    }

    if (document.getElementById('languageCode').className === 'dropdown-item active') {
        for (let i = 0; i < books.length; i++) {
            if (searchterm === books[i].languageCode) {
                searchhits.push(books[i].isbn);
            };
        };
    }

    if (document.getElementById('numPages').className === 'dropdown-item active') {
        for (let i = 0; i < books.length; i++) {
            if (searchterm === books[i].numPages) {
                searchhits.push(books[i].isbn);
            };
        };
    }

    if (document.getElementById('ratingsCount').className === 'dropdown-item active') {
        for (let i = 0; i < books.length; i++) {
            if (searchterm === books[i].ratingsCount) {
                searchhits.push(books[i].isbn);
            };
        };
    }

    if (document.getElementById('textReviewsCount').className === 'dropdown-item active') {
        for (let i = 0; i < books.length; i++) {
            if (searchterm === books[i].textReviewsCount) {
                searchhits.push(books[i].isbn);
            };
        };
    }

    if (document.getElementById('publicationDate').className === 'dropdown-item active') {
        for (let i = 0; i < books.length; i++) {
            if (searchterm === books[i].publicationDate) {
                searchhits.push(books[i].isbn);
            };
        };
    }

    if (document.getElementById('publisher').className === 'dropdown-item active') {
        for (let i = 0; i < books.length; i++) {
            if (searchterm === books[i].publisher) {
                searchhits.push(books[i].isbn);
            };
        };
    }

    if (document.getElementById('bookid').className === 'dropdown-item active') {
        for (let i = 0; i < books.length; i++) {
            if (searchterm === books[i].bookID) {
                searchhits.push(books[i].isbn);
            };
        };
    }
    sessionStorage.setItem('search', searchhits);
}

// Makes Filter work
// When filtering, the filter function will change the class of the dropdown item to active or not active
// The search function will then work by checking if the class of the dropdown item is active or not
/**
 * @function filter
 * @description Filters the search results by the column(s) selected
 * @param {string} n The column to filter by
 * @returns {void}
 */

// eslint-disable-next-line no-unused-vars -- Disabled as this function is indeed called from the HTML files
function filter (n) {
    if (document.getElementById(n).className === 'dropdown-item active') {
        document.getElementById(n).className = 'dropdown-item';
    } else {
        document.getElementById(n).className = 'dropdown-item active';
    }
}
