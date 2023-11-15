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


//Fetch CSV file and parse it (W3Schools, 2023d) (MDN Web Docs, 2023a) (W3Schools, 2023e)  (W3Schools, 2023f) (W3Schools, 2023g) (W3Schools, 2023j) (W3Schools, 2023k) (W3Schools, 2023l)
let books = new Array();

async function parse() {
    let response = await fetch('data.csv');
    let responsetext = await response.text();
    let lines = responsetext.split('\n');
    let data = lines.map(line => line.split(','));
    for(let i=1; i< data.length-1; i++) {
        books.push(new book(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5], data[i][6], data[i][7], data[i][8], data[i][9], data[i][10], data[i][11]))
        };
    }

parse()
