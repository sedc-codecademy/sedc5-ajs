let containers = $("td div.awardslisting")
let books = []

containers.each(function () {
    let title = $(this).find("img").attr("alt");
    let author = $(this).find(".author").text();
    let mouseOver = $(this).find(".trophy").attr("onmouseover");
    let awards = mouseOver ? Number(mouseOver.match(/Total Award Nominations: (\d*)/)[1]) : 0;
    let img = $(this).find("img").attr("src");
    if (title)
        books.push({
            title,
            author,
            awards,
            img
        })
})

console.log(books);
