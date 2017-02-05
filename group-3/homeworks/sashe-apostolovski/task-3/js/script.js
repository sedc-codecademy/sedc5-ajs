let movieRepository = {};

// Initial setup of our movieRepository object 
function setMovies(movies) {
  movieRepository = {
    movies: movies,
    shownMovies: movies,
    pageIndex: 0,
    pageSize: 10,
    
    nextPage: function() {
      if (this.pageIndex < (this.shownMovies.length / this.pageSize) -1) {
        this.pageIndex++;
      }

    },
    prevPage: function() {
      if (this.pageIndex > 0) {
        this.pageIndex--;
      }
    },

    // Search Feature
    searchMovie: function(searchTerm) {
      movieRepository.pageIndex = 0;
      this.shownMovies = this.movies.filter(movie => {
        if (movie.title.toLowerCase().indexOf(searchTerm) !== -1) return true;
        if (movie.year.indexOf(searchTerm) !== -1) return true;
        if (movie.rating.indexOf(searchTerm) !== -1) return true;
        return false
      })
    },

    // Sort Feature
    sortMovies: function(sortBy) {
      movieRepository.pageIndex = 0;
      movieRepository.shownMovies = movieRepository.movies.sort((a, b) => {
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        else if (sortBy === 'year') {
          return Number(b.year) - Number(a.year);          
        }
        else if (sortBy === 'rating') {
          return Number(b.rating) - Number(a.rating);
        }
      });
    }
  }
}

// renders a list of movies
function displayMovies() {
  let movies = movieRepository.shownMovies;
  let startIndex = movieRepository.pageIndex * movieRepository.pageSize;
  let endIndex = (movieRepository.pageIndex + 1) * movieRepository.pageSize;
  movies = movies.slice(startIndex, endIndex);

  let tbody = document.getElementById('data');
  tbody.innerHTML = '';
  movies.forEach(movie => {
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${movie.rank}</td>
        <td><img src="${movie.poster}"></td>
        <td><a href="${movie.link}" target="_blank">${movie.title}</a></td>
        <td>${movie.year}</td>
        <td>${movie.rating}</td>
        <td>${movie.id}</td>
    `;
    tbody.appendChild(tr);
  })

  let page = document.getElementById('page');
  page.innerText = `Page: ${movieRepository.pageIndex + 1}`
}


// Gets JSON data and calls the callback with the data as argument
function getJSON(json, cb){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', json);

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      let data = JSON.parse(xhr.responseText);
      cb(data);
    }
    else {
      throw 'The server returned an error';
    }
  }
  xhr.onerror = () => {
    throw 'Connection error';
  }
  xhr.send();
}


document.addEventListener('DOMContentLoaded', () => {
  getJSON('../scraper/movies.json', (movies) => {
    setMovies(movies);
    displayMovies();
  });

  let nextBtn = document.getElementById('next');
  let prevBtn = document.getElementById('prev');
  let searchBtn = document.getElementById('search')
  let searchInput = document.querySelector('input[type="text"]');
  let select = document.getElementById('select');

  nextBtn.addEventListener('click', () => {
    movieRepository.nextPage();
    displayMovies();
  })
  prevBtn.addEventListener('click', () => {
    movieRepository.prevPage();
    displayMovies();
  })
  select.addEventListener('change', () => {
    movieRepository.sortMovies(select.value);
    displayMovies();
  });
  searchBtn.addEventListener('click', () => {
    event.preventDefault();
    let searchTerm = searchInput.value.toLowerCase();
    movieRepository.searchMovie(searchTerm);
    displayMovies();
  })
})