let moviesContainer = $(".card-group")
let movies = [];
let MGUA = []; // Movies General Usage Array
let pageSize = 16;
let pageNumber = 1;

let MAX_PAGE_NUMBER;

let addMovie = (movie) => {
    moviesContainer.append(`
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 movieWraper">
            <div class="card movieContainer">
                <img class="card-img-top img-fluid posterImage" src="${movie.posterImage}" alt="${movie.title}">
                <div class="card-block">
                    <a href="${movie.titleLink}" target=_blank>
                        <h4 class="card-title">
                            <span data-toggle="tooltip" data-placement="top" title="${movie.titleTitle}">${movie.title} ${movie.secondaryInfo}</span>
                        </h4>
                    </a>
                    <p class="card-text">Rating: <strong>${movie.rating}</strong></p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${movie.ratingTitle}</small>
                </div>
            </div>
        </div>
    `);
}

let removeRows = (moviesContainer) => {
    moviesContainer.html("");
}

let getMovies = () => { return MGUA.length != 0 ? MGUA : movies };

let displayPage = (pageNumber, pageSize, movies, moviesContainer) => {
    removeRows(moviesContainer);
    let startIndex = (pageNumber - 1) * pageSize;
    let endIndex = pageNumber * pageSize;
    let displayMovies = movies.slice(startIndex, endIndex);
    displayMovies.forEach((m) => addMovie(m));
}

let setPagination = (length) => {
    let container = $("#pages");
    let elements = "";
    for (let i = 0; i < length; ++i) {
        elements += `<li class="page-item"><a class="page-link" href="#">${i+1}</a></li>`
    }
    container.append(elements);
    container.find("li").on('click', function() {
        pageNumber = $(container).find("li").index($(this)) + 1
        setPage(pageNumber);
        displayPage(pageNumber, pageSize, getMovies(), moviesContainer);
    })
}

let setPage = (pageNumber) => {
    pageNumber < 2 ? $("#previous").addClass("disabled") : $("#previous").removeClass("disabled");
    pageNumber > MAX_PAGE_NUMBER - 1 ? $("#next").addClass("disabled") : $("#next").removeClass("disabled");

    let pages = $("#pages");
    pages.find(".active").removeClass("active");
    pages.find("li").eq(pageNumber - 1).addClass("active");
}

let setMaxPageNumber = (length) => {
    MAX_PAGE_NUMBER = (length % pageSize | 0) == 0 ? (length / pageSize | 0) : (length / pageSize | 0) + 1;
}

let handleSorts = (sortProperty) => {
    sortMovies((a, b) => comparator(a[sortProperty], b[sortProperty], getSortOrder()));
}

let comparator = (a, b, order) => {
    if ($("sortBy").val() == "secondaryInfo") {
        a = parseInt(a.slice(1, 5), 10);
        b = parseInt(b.slice(1, 5), 10);
    }
    if (!$.isNumeric(a)) {
        a = a.toLowerCase();
        b = b.toLowerCase();
    }
    if (order == "ASCENDING") {
        return a < b ? 1 : (a > b ? -1 : 0);
    } else if (order == "DESCENDING") {
        return a > b ? 1 : (a < b ? -1 : 0);
    }
}

let sortMovies = (wayOfSort) => {
    MGUA = getMovies();
    MGUA.sort(wayOfSort);
    pageNumber = 1;
    setPage(pageNumber);
    displayPage(pageNumber, pageSize, getMovies(), moviesContainer);
}

let getSortOrder = () => {
    return $("#sortOrder").hasClass("fa-caret-up") ? "ASCENDING" : "DESCENDING";
}

$(() => {

    $("#previous").on('click', function() {
        if (pageNumber > 1)
            setPage(--pageNumber);
        displayPage(pageNumber, pageSize, getMovies(), moviesContainer);
    })

    $("#next").on('click', function() {
        if (pageNumber < MAX_PAGE_NUMBER)
            setPage(++pageNumber);
        displayPage(pageNumber, pageSize, getMovies(), moviesContainer);
    })

    $("#sortBy").on('change', function() {
        handleSorts($(this).val());
    });

    $("#sortOrder").on('click', function() {
        if ($(this).hasClass("fa-caret-down")) {
            $(this).removeClass("fa-caret-down");
            $(this).addClass("fa-caret-up");
        } else {
            $(this).removeClass("fa-caret-up");
            $(this).addClass("fa-caret-down");
        }
        handleSorts($("#sortBy").val());
    });

    $.ajax("data.json", {
        complete: (data) => {
            let result = data.responseJSON;
            movies = result;
            setMaxPageNumber(result.length);
            setPagination(MAX_PAGE_NUMBER);
            setPage(pageNumber);
            displayPage(pageNumber, pageSize, getMovies(), moviesContainer);
        }
    });
})