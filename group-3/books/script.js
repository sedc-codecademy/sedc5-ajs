$(() => {
    $("#loadBtn").on('click', () => {
        $.ajax("books.json", {
            complete: (data) => {
                setBooks(data.responseJSON);
                displayBooks();
            }
        });
    });

    $("#searchBtn").on('click', () => {
        let searchTerm = $("#search").val();
        booksRepository.filter(searchTerm);
        displayBooks();
    });

    $("#prevPage").on('click', () => {
        booksRepository.prevPage();
        displayBooks();
    });

    $("#nextPage").on('click', () => {
        booksRepository.nextPage();
        displayBooks();
    });
})

let booksRepository = {};
let setBooks = (books) => {
    booksRepository = {
        books: books,
        shownBooks: books,
        pageIndex: 0,
        pageSize: 10,
        prevPage: function () {
            if (this.pageIndex != 0)
                this.pageIndex--;
        },
        nextPage: function () {
            // todo: look for edge cases
            let totalPages = this.shownBooks.length / this.pageSize + 1;
            if (this.pageIndex != totalPages - 1)
                this.pageIndex++;
        },
        filter: function (searchTerm) {
            searchTerm = searchTerm.toLowerCase();
            this.shownBooks = this.books.filter(book => {
                if (book.author.toLowerCase().indexOf(searchTerm) !== -1)
                    return true;
                if (book.title.toLowerCase().indexOf(searchTerm) !== -1)
                    return true;
                return false;
            });
            this.pageIndex = 0;
        }
    }
};

let displayBooks = () => {
    let books = booksRepository.shownBooks;
    let startIndex = booksRepository.pageIndex * booksRepository.pageSize;
    let endIndex = (booksRepository.pageIndex + 1) * booksRepository.pageSize;
    books = books.slice(startIndex, endIndex);

    let container = $("#container");
    container.html("");
    books.forEach(book => {
        container.append(`<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.awards}</td>
            <td><img style="width:80px" src="${book.image}"></td>
        </tr>`)
    })

    $("#total").text(booksRepository.shownBooks.length);
}
