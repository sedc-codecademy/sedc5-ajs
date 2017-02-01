let result = [];

result = [];
$(".awardslisting").each(function () {
    let bookDiv = $(this);
    let title = bookDiv.find("img").attr("alt");
    let author = bookDiv.find(".author").text();
    let awards = bookDiv.find("a.trophy");
    let awregex = /Total Award Nominations: (\d+)/;
    let awresult = awregex.exec(awards.attr("onmouseover"));
    let awardCount = awresult ? Number(awresult[1]) : 0;
    let image = bookDiv.find("img").attr("src");
    image = image && image.replace("covers_md", "https://www.worldswithoutend.com/covers");
    let yearRes = $(bookDiv.parent().parent().parent().find("td")[0]).text();
    yearRes = /\d+\. \((\d+)\)/.exec(yearRes);
    year = yearRes ? Number(yearRes[1]) : null;
    result.push({
        title: title,
        author: author,
        awards: awardCount,
        image: image,
        year: year
    });
});

result = result.filter(b => b.title);
console.log(result);

$(".awardslisting").each(function () {
    let bookDiv = $(this);
    let yearRes = $(bookDiv.parent().parent().parent().find("td")[0]).text();
    yearRes = /\d+\. \((\d+)\)/.exec(yearRes);
    year = yearRes ? Number(yearRes[1]) : null;
    console.log(year);
});