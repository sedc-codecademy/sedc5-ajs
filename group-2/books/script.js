let booksContainer = $("#booksContainer");

let addBookToTable = function (book, booksContainer) {
    booksContainer.append(`<tr>
                    <td>${book.author}</td>
                    <td>${book.title}</td>
                    <td>${book.awards}</td>
                    <td><img src="https://www.worldswithoutend.com/${book.img}" /></td>
                </tr>`);
};

let pageSize = 20;
let pageNumber = 1;
let books = [];

let removeRows = function (booksContainer) {
    booksContainer.html("");
}

let displayPage = (pageNumber, pageSize, books, booksContainer) => {
    removeRows(booksContainer);
    let startIndex = (pageNumber - 1) * pageSize;
    let endIndex = pageNumber * pageSize;
    let displayBooks = books.slice(startIndex, endIndex)
    displayBooks.forEach(b => addBookToTable(b, booksContainer))
}

$(() => {
    $("#previous").on('click', () => {
        if (pageNumber > 1) {
            pageNumber -= 1;
        }
        displayPage(pageNumber, pageSize, books, booksContainer);
    })

    $("#next").on('click', () => {
        let maxPageNumber = (books.length / pageSize | 0) + 1;
        if (pageNumber < maxPageNumber) {
            pageNumber += 1;
        }
        displayPage(pageNumber, pageSize, books, booksContainer);
    })

    $.ajax("books2.json", {
        complete: (data) => {
            let result = data.responseJSON;
            books = result;
            displayPage(pageNumber, pageSize, books, booksContainer);
        }
    });
})




