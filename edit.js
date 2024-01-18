// This JS file contains the code that allows the user to edit the dataset.
// I was not aware of any methods that allow me to directly edit a CSV file, so I decided to use local storage to store the added/removed books.
// When the books array is loaded, books are also loaded from local storage, and added to the books array.
// If any books have been removed, they are removed from the books array when the books array is loaded.
// This means that the user can add/remove books, and then revert the dataset to its original state.

// Declare that Book, books, location and localstorage is a global variable for ESLint (ESLint, 2023a)
/* global Book books localStorage location  */

// Function to revert dataset to original state (erases all local storage (MDN Web Docs, 2023d))
// eslint-disable-next-line no-unused-vars -- Disabled as this function is indeed called from the HTML files
function revert () {
    localStorage.clear();

    // Alert user (W3Schools, 2023m)
    // eslint-disable-next-line no-undef -- Disabled as alert is a built-in function
    alert('Dataset reverted to original state');
    location.reload();
}

// Function to add book to dataset (By saving the added books in local storage) (MDN Web Docs, 2023d)
// eslint-disable-next-line no-unused-vars -- Disabled as this function is indeed called from the HTML files
function addbook () {
    // Check if title/authors are empty, if so, alert user
    if (document.getElementById('addtitle').value === '') {
        // eslint-disable-next-line no-undef -- Disabled as alert is a built-in function
        alert('Please enter a title');
        return;
    }

    if (document.getElementById('addauthors').value === '') {
        // eslint-disable-next-line no-undef -- Disabled as alert is a built-in function
        alert('Please enter an author');
        return;
    }

    // Check if other fields are empty, if so, set them to default values

    if (document.getElementById('addaverageRating').value === '') {
        document.getElementById('addaverageRating').value = 0;
    }

    if (document.getElementById('addisbn').value === '') {
        document.getElementById('addisbn').value = '0000000000';
    }

    if (document.getElementById('addisbn13').value === '') {
        document.getElementById('addisbn13').value = 0;
    }

    if (document.getElementById('addlanguageCode').value === '') {
        document.getElementById('addlanguageCode').value = 'N/A';
    }

    if (document.getElementById('addnumPages').value === '') {
        document.getElementById('addnumPages').value = 0;
    }

    if (document.getElementById('addratingsCount').value === '') {
        document.getElementById('addratingsCount').value = 0;
    }

    if (document.getElementById('addtextReviewsCount').value === '') {
        document.getElementById('addtextReviewsCount').value = 0;
    }

    if (document.getElementById('addpublicationDate').value === '') {
        document.getElementById('addpublicationDate').value = 'N/A';
    }

    if (document.getElementById('addpublisher').value === '') {
        document.getElementById('addpublisher').value = 'N/A';
    }

    // Create new bookid, create new book, add book to local storage, add book to books array (Stack Overflow, 2010)
    let addedbooks = JSON.parse(localStorage.getItem('addedbooks'));
    let newid = localStorage.getItem('newid');
    if (addedbooks === null) {
        addedbooks = [];
        newid = 45642;
    };
    newid = Number(newid) + Number(1);
    const newbook = new Book(newid, document.getElementById('addtitle').value, document.getElementById('addauthors').value, document.getElementById('addaverageRating').value, document.getElementById('addisbn').value, document.getElementById('addisbn13').value, document.getElementById('addlanguageCode').value, document.getElementById('addnumPages').value, document.getElementById('addratingsCount').value, document.getElementById('addtextReviewsCount').value, document.getElementById('addpublicationDate').value, document.getElementById('addpublisher').value);
    addedbooks.push(newbook);
    localStorage.setItem('addedbooks', JSON.stringify(addedbooks));
    localStorage.setItem('newid', newid);
    books.push(newbook);
    console.log(newbook);
    console.log(addedbooks);

    // Alert user (W3Schools, 2023m)
    // eslint-disable-next-line no-undef -- Disabled as alert is a built-in function
    alert('Book added to dataset. New book ID: ' + newid);
    location.reload();
}

// Function to remove book from dataset (By storing a list of books to remove in local storage) (MDN Web Docs, 2023d)
// eslint-disable-next-line no-unused-vars -- Disabled as this function is indeed called from the HTML files
function removebook () {
    // Check if bookid and isbn are empty, if so, alert user
    if (document.getElementById('removebookid').value === '' && document.getElementById('removeisbn').value === '') {
        // eslint-disable-next-line no-undef -- Disabled as alert is a built-in function
        alert('Please enter a book ID or ISBN');
        return;
    }

    // Check if bookid and isbn are both filled, if so, alert user
    if (document.getElementById('removebookid').value !== '' && document.getElementById('removeisbn').value !== '') {
        // eslint-disable-next-line no-undef -- Disabled as alert is a built-in function
        alert('Please enter a book ID or ISBN, not both');
        return;
    }

    // Set up variables/storage for removed books (MDN Web Docs, 2023d)
    let removedbooks = JSON.parse(localStorage.getItem('removedbooks'));
    if (removedbooks === null) {
        removedbooks = [];
    };

    // Check if bookid is filled, if so, add book to removed books
    if (document.getElementById('removebookid').value !== '') {
        removedbooks.push(document.getElementById('removebookid').value);
    }

    // Check if isbn is filled, if so, add bookID to removed books
    if (document.getElementById('removeisbn').value !== '') {
        for (let i = 0; i < books.length; i++) {
            if (document.getElementById('removeisbn').value === books[i].isbn) {
                removedbooks.push(books[i].bookID);
            }
        }
    }

    // Store removed books in local storage
    localStorage.setItem('removedbooks', JSON.stringify(removedbooks));

    // Alert user (W3Schools, 2023m)
    // eslint-disable-next-line no-undef -- Disabled as alert is a built-in function
    alert('Book(s) removed from dataset');
    location.reload();
}
