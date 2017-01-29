let numbers = [1, 3, 5, 2, 6, 9, 12, 5, 16, 7];

numbers.sort((a, b) => b - a);

console.log(numbers);

let books = [{
    author: "Arthur Clarke",
    title: "Randezvous with Rama",
}, {
    author: "Isaac Asimov",
    title: "The gods themselves",
}, {
    author: "Arthur Clarke",
    title: "The city and the Stars",
}, {
    author: "Vernon Vinge",
    title: "Fire in the deep"
}, {
    author: "Isaac Asimov",
    title: "Caves of steel",
}];

let result = books.sort((a, b) => a.title.localeCompare(b.title)).slice();
console.log(result);

result = books.sort((a, b) => b.title.localeCompare(a.title)).slice();
console.log(result);

result = books.sort((a, b) => {
    let authorCompare = a.author.localeCompare(b.author);
    if (authorCompare)
        return authorCompare;
    return a.title.localeCompare(b.title);
}).slice();
console.log(result);