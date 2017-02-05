// Need array of Movie objects
// Movie has poster, rank, title, link, year, IMDb rating, IMDb ID

(function(){

  let movies = [];
  let moviesNodeList = document.querySelectorAll('.lister-list > tr');

  return Array.prototype.reduce.call(moviesNodeList, (movies, movieElement) => {
    let movie = {};
    let posterElement = movieElement.querySelector('.posterColumn');
    movie.poster = posterElement.querySelector('img').src;

    let titleElement = movieElement.querySelector('.titleColumn');
    let titleRegex = /([\d]{1,3})\. (.+) \(([\d]{4})\)/.exec(titleElement.innerText);
    
    movie.rank = titleRegex[1];
    movie.title = titleRegex[2];
    movie.year = titleRegex[3];
    movie.rating = movieElement.querySelector('.ratingColumn').innerText;

    let linkToMoviePage = movieElement.querySelector('.titleColumn a').href
    let linkRegex = /^http:\/\/www.imdb.com\/title\/(tt[\d]{7}).+$/.exec(linkToMoviePage);

    movie.id = linkRegex[1];
    movie.link = `http://www.imdb.com/title/${movie.id}`;

    movies.push(movie);
    return JSON.stringify(movies);
  }, []);
})();