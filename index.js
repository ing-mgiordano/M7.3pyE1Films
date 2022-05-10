import { films } from './films.js'
console.log(films)

// show all films titles
let buttonTitle = document.getElementById('filmsTitleButton')
buttonTitle.addEventListener('click',()=>showTitleFilms())

function showTitleFilms() {
    let arrayTitle = []
    films.forEach(function findTitle(film) {
        arrayTitle.push(film.Title + `<br>`)
    })
    document.getElementById('titlesFilms').innerHTML = arrayTitle.join(' ')
}
showTitleFilms

// imprimir todo el array de peliculas pero que el rating sea numero y no string
let buttonRating = document.getElementById('filmsRatingButton')
buttonRating.addEventListener('click',()=>changeRatingToNumber())

function changeRatingToNumber () {
    function parseRatingToNum(film){
        const filmToModify = {...film} 
        console.log(filmToModify)//si no agrego los puntos, al modificar el nuevo array se modifica el original
        filmToModify.imdbRating = Number(filmToModify.imdbRating)
        return filmToModify
    } 
    let arrayRating = films.map(parseRatingToNum)

    console.log(arrayRating)
    console.log(films)

    let ratingNum = []
    films.forEach(function findRating(film) {
        ratingNum.push(film.imdbRating + `<br>`)
        
    })
    
    document.getElementById('imbdRating').innerHTML = ratingNum.join(' ')
    return ratingNum
}
changeRatingToNumber

// order films by year
let buttonOrderYear = document.getElementById('orderYearButton')
buttonOrderYear.addEventListener('click',()=>orderFilmsByYear())

function orderFilmsByYear () {
    films.sort(function(a, b){   // el sort no me funciona si creo otro array arrayorder = {...films}
        return a.Year-b.Year
    })
    let arrayTitleOrder = []
    films.forEach(function findYear(films) {
        arrayTitleOrder.push(films.Title + `<br>`)
    })
    document.getElementById('orderByYearFilm').innerHTML = arrayTitleOrder.join(' ')

}
orderFilmsByYear

// show comming soon films
let buttonComming = document.getElementById('titlesCommingButton')
buttonComming.addEventListener('click',()=>showCommingSoonFilms())

function showCommingSoonFilms () {
    let arrayCommingSoon = []
    films.forEach(function getComming(films) {
        if (films.ComingSoon){
            arrayCommingSoon.push(films.Title + `<br>`)
        }
    })
    document.getElementById('titlesComming').innerHTML = arrayCommingSoon.join('')
}
showCommingSoonFilms

// find some serie with genere Action
let buttonAccionSeries = document.getElementById('buttonAccionSeries')
buttonAccionSeries.addEventListener('click',()=>findSomeSerie())

function findSomeSerie () {
    let arrayAccionSeries = []
    films.forEach(function getAccionSeries(films) {
        if(films.Genre = "Action" && films.Type === "series"){       // porq no funciona si films.Genre === "Action"
            arrayAccionSeries.push(films.Title + '<br>')
        }
    })
    document.getElementById('titlesAccionSeries').innerHTML = arrayAccionSeries.join('')
}
findSomeSerie

// reduce imdbRating and calculate average
let buttonAverage = document.getElementById('buttonAverage')
buttonAverage.addEventListener('click',()=>averageRating())

function averageRating () {
    let ratingNum = []
    films.forEach(function findRating(film) {
        if(!isNaN(film.imdbRating)){
            ratingNum.push(Number(film.imdbRating))
        }
    })   // Este codigo para generar ratingNum ya lo tengo.. como lo llamo para usarlo?
    let average = (ratingNum.reduce((a, b) => a+b)) / ratingNum.length
    
    document.getElementById('averagerating').innerHTML = average
}
averageRating
