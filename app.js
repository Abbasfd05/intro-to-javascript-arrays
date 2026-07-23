const movies=["TheConjuring","backrooms","Train to busan"];

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}
movies.push('Parasite', 'Dune');
// movies is ['Barbie', 'Arrival', 'Get Out', 'Parasite', 'Dune']
movies.pop();
// movies is ['Barbie', 'Arrival', 'Get Out', 'Parasite"]
const removedMovie = movies.pop();
// movies is ['Barbie', 'Arrival', 'Get Out']
// removedMovie is 'Parasite'
for (let movie of movies) {
  console.log(movie);
}
movies.forEach((movie) => {
  console.log(movie)
});
movies.forEach((movie, index) => {
  if(index === 2) console.log("This is the third movie:");
  console.log(movie);
});
for (let idx = 0; idx < movies.length; idx++) {
  console.log(`${idx + 1}. ${movies[idx]}`);
}
function printMsg(movie) {
const msg=`I like watching the movie ${movie}`;
return msg;
}
console.log(printMsg("The Conjuring"));
movies.forEach(function (movie) {
  console.log('this is the movie ' + movie); 
});