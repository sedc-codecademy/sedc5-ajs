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
let filterBooks = [];

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
        displayPage(pageNumber, pageSize, filterBooks, booksContainer);
    })

    $("#next").on('click', () => {
        let maxPageNumber = (books.length / pageSize | 0) + 1;
        if (pageNumber < maxPageNumber) {
            pageNumber += 1;
        }
        displayPage(pageNumber, pageSize, filterBooks, booksContainer);
    })

    $("#search").on('click', ()=>{
        let searchItem = $("#searchItem").val();
        if (!searchItem)
            return;
        searchItem = searchItem.toLowerCase();
        
        filterBooks = books.filter(b => {
            if (b.author.toLowerCase().indexOf(searchItem) !== -1)
                return true;
            if (b.title.toLowerCase().indexOf(searchItem) !== -1)
                return true;
            return false;
        })
        pageNumber = 1;
        displayPage(pageNumber, pageSize, filterBooks, booksContainer);
    })

    $.ajax("books2.json", {
        complete: (data) => {
            let result = data.responseJSON;
            books = result;
            filterBooks = books;
            displayPage(pageNumber, pageSize, filterBooks, booksContainer);
        }
    });
})




