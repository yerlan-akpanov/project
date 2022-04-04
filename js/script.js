"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из нескольких просмотренных фильмов?", "");
const b = prompt("На сколько оцените его?", "");
const c = prompt("Один из нескольких просмотренных фильмов?", "");
const d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies = { a: b }; - неправильно

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
