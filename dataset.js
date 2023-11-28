//Parses data into array using object constructor

//Store books as objects
class book {
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

//Fetch CSV file and parse it (W3Schools, 2023d) (MDN Web Docs, 2023a) (W3Schools, 2023e) (W3Schools, 2023g) (W3Schools, 2023k) (W3Schools, 2023l)
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