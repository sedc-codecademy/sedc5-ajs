let books = [{
    author: "Arthur Clarke",
    title: "Randezvous with Rama",
}, {
    author: "Isaac Asimov",
    title: "The gods themselves",
},{
    author: "Arthur Clarke",
    title: "The city and the Stars",
}, {
    author: "Vernon Vinge",
    title: "Fire in the deep"
}, {
    author: "Isaac Asimov",
    title: "Caves of steel",
}];

//books.sort((a, b) => a.author.localeCompare(b.author));
//books.sort((a, b) => a.title.localeCompare(b.title));
books.sort((a, b) => {
    let authorCompare = a.author.localeCompare(b.author);
    if (authorCompare)
        return authorCompare;
    return a.title.localeCompare(b.title);
});
console.log(books);