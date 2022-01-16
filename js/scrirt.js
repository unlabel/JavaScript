const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {

    count: numberOfFilms,  
    movies: {},
    actors: {},
    genres: [],
    privat: false   
};

const a = prompt("Предпоследний просмотренный фильм?", ""),
      b = prompt("Оцените фильм от 0 до 10", ""),
      c = prompt("Последний просмотренный фильм?", ""),
      d = prompt("Оцените фильм от 0 до 10", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);