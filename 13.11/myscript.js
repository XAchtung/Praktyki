const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];

//6
const count = (book) => book.map((book) => book.title.split(" ").join("").length);
const even = (book) => book.filter((book) => book.pages % 2 == 0);
const genre = (list) => list.filter((book) => book.genre.endsWith("y"));

const compose1 = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
const result1 = compose1(count, even, genre);

console.log(result1(books));

//7
const countPositiveRating =(book)=> book.reduce((total, next) => total + next);
const isPositiveRating = (book) => book.map((book) => book.rating > 5)

const odd = (book) => book.filter((book) => book.pages % 2 == 1);
const hasNumber = (book) => book.filter((book) => /[0-9]/.test(book.title))

const compose2 = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
const result2 = compose2(countPositiveRating, isPositiveRating, odd, hasNumber,);

console.log(result2(books));

//8 
const secondMax = (book) => book.sort((a, b) => b.title.length - a.title.length);
const countTitle = (book) => book.map(({title}) => title);

const compose3 = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
const result3 = compose3(countTitle, secondMax);

console.log(result3(books)[1]);