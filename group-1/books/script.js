let allBooks = [];

$(() => {
    $.ajax("gbooks.json", {
        complete: (data) => {
            allBooks = data.responseJSON;
            clearTable();
            allBooks.forEach(b => displayBook(b));
        }
    });

    $("#search").on("click", () => {
        let searchTerm = $("#searchTerm").val().toLowerCase();
        let books = allBooks.filter(b => {
            if (b.author.toLowerCase().indexOf(searchTerm) !== -1)
                return true;
            return false;
        });
        clearTable();
        books.forEach(b => displayBook(b));
    })
})


let displayBook = (book) => {
    let bookList = $("#book-list");

    bookList.append(`<tr>
        <td>${book.author}</td>
        <td>${book.title}</td>
        <td>0</td>
        <td><img src="${book.img}"></td>
    </tr>`)
}

let clearTable = () => {
    let bookList = $("#book-list");
    bookList.html("");
}

