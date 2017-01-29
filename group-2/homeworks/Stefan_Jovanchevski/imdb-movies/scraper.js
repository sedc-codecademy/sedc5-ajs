let movies = $(".lister-list").find("tr");
let moviesFinal = []; // array with all data
let images = [];

let levelOne = (url) => {
    let d = document.createElement("div");
    $(d).load(url);
    return $(d);
}

movies.each(function() {
    let posterLink = `http://www.imdb.com${$(this).find("td.posterColumn").find("a").attr("href")}`;
    let theOtherSite = levelOne(posterLink);
    let index = movies.index($(this)) + 1;
    let title = $(this).find("td.titleColumn").find("a").text();
    let titleLink = `http://www.imdb.com${$(this).find("td.titleColumn").find("a").attr("href")}`;
    let titleTitle = $(this).find("td.titleColumn").find("a").attr("title");
    let secondaryInfo = $(this).find("td.titleColumn").find("span.secondaryInfo").text();
    let rating = parseFloat($(this).find("td.imdbRating").find("strong").text());
    let ratingTitle = $(this).find("td.imdbRating").find("strong").attr("title");

    moviesFinal.push({
        posterLink,
        theOtherSite,
        index,
        title,
        titleLink,
        titleTitle,
        secondaryInfo,
        rating,
        ratingTitle
    });
});

moviesFinal.forEach((m) => {
    m.posterImage = m.theOtherSite.find(".poster").find("img").attr("src");
    delete m.theOtherSite;
});