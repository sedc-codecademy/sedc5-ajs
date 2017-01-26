
let regex = /^.* — (.*) ratings$/gim;

//goodreads selector
$("tr").each(function () {
    let names = $(this).find("span[itemprop='name']");
    console.log($(names[0]).text());
    console.log($(names[1]).text());
    console.log($(this).find("img").attr("src"));
    let ratingText = $(this).find(".minirating").text();
    let ratingString = regex.exec(ratingText)[1];
    console.log(ratingText);
    // let rating = Number(ratingString.split(",").join(""))
    // console.log(rating);
    
}); 


let result = []
$("tr").each(function () {
    let names = $(this).find("span[itemprop='name']");
    result.push({
        title: $(names[0]).text(),
        author: $(names[1]).text(),
        img: $(this).find("img").attr("src")
    })
}); 