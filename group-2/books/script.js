$(() => {
    $.ajax("books2.json", {
        complete: (data) => {
            let result = data.responseJSON;
            let booksContainer = $("#booksContainer");
            result.forEach(b => {
                booksContainer.append(`<tr>
                    <td>${b.author}</td>
                    <td>${b.title}</td>
                    <td>${b.awards}</td>
                    <td><img src="https://www.worldswithoutend.com/${b.img}" /></td>
                </tr>`);
            })
        }
    })
})