//This JS file contains the code that loads the dataset and stores it in an array of objects.
//When loading the dataset, I decided to pass the data through a class, while this likely makes loading the data slower, it makes it easier to access specific parts of the data later (especially when using the search function).


//Class that creates a book object for each book in the dataset
class book {
    /**
     * Creates a new book object
     * @param {number} bookID - The ID of the book
     * @param {string} title - The title of the book
     * @param {string} authors - The author(s) of the book
     * @param {number} average_rating - The average rating of the book
     * @param {number} isbn - The ISBN of the book
     * @param {number} isbn13 - The ISBN13 of the book
     * @param {string} language_code - The language code of the book
     * @param {number} num_pages - The number of pages in the book
     * @param {number} ratings_count - The number of ratings the book has
     * @param {number} text_reviews_count - The number of text reviews the book has
     * @param {string} publication_date - The publication date of the book
     * @param {string} publisher - The publisher of the book
     * 
     * @returns {object} - A book object
     */
    constructor(bookID, title, authors, average_rating, isbn, isbn13, language_code, num_pages, ratings_count, text_reviews_count, publication_date, publisher) {
        this.bookID = bookID;
        this.title = title;
        this.authors = authors;
        this.average_rating = average_rating;
        this.isbn = isbn;
        this.isbn13 = isbn13;
        this.language_code = language_code;
        this.num_pages = num_pages;
        this.ratings_count = ratings_count;
        this.text_reviews_count = text_reviews_count;
        this.publication_date = publication_date;
        this.publisher = publisher;
    }
}

//Fetch CSV file and parse it. (W3Schools, 2023d) (MDN Web Docs, 2023a) (W3Schools, 2023e) (W3Schools, 2023g) (W3Schools, 2023k) (W3Schools, 2023l)
//If the page is on the full dataset/search results page, this also loads the table with the data
//Each book object is then stored in an array, for easy access later
let books = new Array();
d3.csv("data.csv").then(data => {
    for(let i=0; i< data.length; i++) {
        books.push(new book(data[i].bookID, data[i].title, data[i].authors, data[i].average_rating, data[i].isbn, data[i].isbn13, data[i].language_code, data[i].num_pages, data[i].ratings_count, data[i].text_reviews_count, data[i].publication_date, data[i].publisher))
        };
    
    //Check if page is on full database, if so, load the table
    if (document.URL.includes("fulldataset.html")) {
        tbbasic()
    }

    //Check if page is on search results, if so, load search results
    if (document.URL.includes("searchresults.html")) {
        tbsearchbasic()
    }
})

//Check if DOM has loaded (MDN Web Docs, 2023c)
//This is needed as the DOM must be loaded before appending the table to the page, otherwise an error occurs
addEventListener("DOMContentLoaded", (event) => {
    //Check if page is on full database, if so, load the table
    if (document.URL.includes("fulldataset.html")) {
        tbbasic()
    }

    //Check if page is on search results, if so, load search results
    if (document.URL.includes("searchresults.html")) {
        tbsearchbasic()
    }
})