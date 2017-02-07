let books = [
    {
        "title": "Nineteen Eighty-Four",
        "author": "George Orwell",
        "awards": 0,
        "img": "covers_md/go_nineteen.jpg"
    },
    {
        "title": "Earth Abides",
        "author": "George R. Stewart",
        "awards": 0,
        "img": "covers_md/grs_earthabi.jpg"
    },
    {
        "title": "The Martian Chronicles",
        "author": "Ray Bradbury",
        "awards": 0,
        "img": "covers_md/rb_themarti.jpg"
    },
    {
        "title": "The Puppet Masters",
        "author": "Robert A. Heinlein",
        "awards": 0,
        "img": "covers_md/rah_thepuppe.jpg"
    }
];

interface IBook {
    title: string,
    author: string;
    awards?: number;
}

interface IBookWithImage extends IBook {
    img: string;
}


let getBookInfo = (book: IBook) => {
    return `${book.title} - ${book.author} (${book.awards})`;
}

let orwell = {
    "title": "Nineteen Eighty-Four",
    "author": "George Orwell",
    "awards": 0,
    "img": "covers_md/go_nineteen.jpg",
    "whatever": 7.2
};


console.log(getBookInfo(orwell));
console.log("----------");
books.forEach(b => console.log(getBookInfo(b)));