//Makes Search Bar Work (MDN Web Docs, 2023b)
function search() {
    let searchhits = new Array();
    let searchterm = document.getElementById("searchquery").value;

    if (document.getElementById('title').className == 'dropdown-item active') {
        for (let i=0; i<books.length; i++) {
            if (searchterm == books[i].title) {
                searchhits.push(books[i].isbn)
            };
        };
    }

    if (document.getElementById('authors').className == 'dropdown-item active') {
        for (let i=0; i<books.length; i++) {
            if (searchterm == books[i].authors) {
                searchhits.push(books[i].isbn)
            };
        };
    }

    if (document.getElementById('average_rating').className == 'dropdown-item active') {
        for (let i=0; i<books.length; i++) {
            if (searchterm == books[i].average_rating) {
                searchhits.push(books[i].isbn)
            };
        };
    }

    if (document.getElementById('isbn').className == 'dropdown-item active') {
        for (let i=0; i<books.length; i++) {
            if (searchterm == books[i].isbn) {
                searchhits.push(books[i].isbn)
            };
        };
    }

    if (document.getElementById('isbn13').className == 'dropdown-item active') {
        for (let i=0; i<books.length; i++) {
            if (searchterm == books[i].isbn13) {
                searchhits.push(books[i].isbn)
            };
        };
    }

    if (document.getElementById('language_code').className == 'dropdown-item active') {
        for (let i=0; i<books.length; i++) {
            if (searchterm == books[i].language_code) {
                searchhits.push(books[i].isbn)
            };
        };
    }

    if (document.getElementById('num_pages').className == 'dropdown-item active') {
        for (let i=0; i<books.length; i++) {
            if (searchterm == books[i].num_pages) {
                searchhits.push(books[i].isbn)
            };
        };
    }

    if (document.getElementById('ratings_count').className == 'dropdown-item active') {
        for (let i=0; i<books.length; i++) {
            if (searchterm == books[i].ratings_count) {
                searchhits.push(books[i].isbn)
            };
        };
    }

    if (document.getElementById('text_reviews_count').className == 'dropdown-item active') {
        for (let i=0; i<books.length; i++) {
            if (searchterm == books[i].text_reviews_count) {
                searchhits.push(books[i].isbn)
            };
        };
    }

    if (document.getElementById('publication_date').className == 'dropdown-item active') {
        for (let i=0; i<books.length; i++) {
            if (searchterm == books[i].publication_date) {
                searchhits.push(books[i].isbn)
            };
        };
    }

    if (document.getElementById('publisher').className == 'dropdown-item active') {
        for (let i=0; i<books.length; i++) {
            if (searchterm == books[i].publisher) {
                searchhits.push(books[i].isbn)
            };
        };
    }

    if (document.getElementById('bookid').className == 'dropdown-item active') {
        for (let i=0; i<books.length; i++) {
            if (searchterm == books[i].bookID) {
                searchhits.push(books[i].isbn)
            };
        };
    }
    sessionStorage.setItem("search", searchhits)
}

//Makes Filter work
function filter(n) {
    if (document.getElementById(n).className == 'dropdown-item active') {
        document.getElementById(n).className='dropdown-item'
    }
    else {
        document.getElementById(n).className='dropdown-item active'
    }
}