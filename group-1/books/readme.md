#Exercise for web-scraping and functional javascript

1. Go to [this link](https://www.goodreads.com/list/show/264.Books_That_Everyone_Should_Read_At_Least_Once) and get all the data into a json file. The format of the file should be:

```javascript
[{
    title,
    author,
    ratings, //bonus
    image, //url, bonus
}...]
```


To include jQuery in the console, you can use [this link](http://stackoverflow.com/questions/7474354/include-jquery-in-the-javascript-console)

To get a list of authors and titles, you can use:

```javascript
$("tr").each(function () {
    let names = $(this).find("span[itemprop='name']");
    console.log($(names[0]).text());
    console.log($(names[1]).text());
});
```
