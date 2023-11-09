//Parses data into array using object constructor


//Object Constructor
function book(bookID, title, authors, average_rating, isbn, isbn13, language_code, num_pages, ratings_count, text_reviews_count, publication_date, publisher) {
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


//Fetch CSV file and parse it https://www.w3schools.com/jsref/api_fetch.asp https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch https://www.w3schools.com/js/js_promise.asp //https://www.w3schools.com/jsref/jsref_split.asp
let books = new Array();
fetch('data.csv')
    .then(response => response.text())
    .then(text => {
        var lines = text.split('\n');
        var data = lines.map(line => line.split(','));
        for(let i=0; i< data.length; i++) {
            books.push(new book(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5], data[i][6], data[i][7], data[i][8], data[i][9], data[i][10], data[i][11]))
            }
        }
    )
