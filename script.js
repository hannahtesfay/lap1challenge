
const form = document.getElementById("form")
const input = document.getElementById("searchbar")
const search = document.getElementById("submit")
const feelinglucky = document.getElementById("feelingLucky")
const results = document.getElementById("results")

let query
search.addEventListener("click", (e) => {
    e.preventDefault();
    query = input.value;
    // query = titleCase(query);
    fetch(`http://localhost:3000/search?q=${query}`)
        .then((r) => r.json())
        .then(displayResults)
        .then((data) => console.log(data))
        .catch((err) => console.warn("Oops!"))
});

feelinglucky.addEventListener("click", (e) => {
    e.preventDefault();
    query = input.value;
    // query = titleCase(query);
    fetch(`http://localhost:3000/search?q=${query}`)
        .then((r) => r.json())
        .then(showFeelingLucky)
        .catch((err) => console.warn("Oops!"))
});

function showFeelingLucky(animal) {
    let animalName = animal.name;
    animalName === undefined
        ? console.log("Try another search term!")
        : window.open(`https://en.wikipedia.org/wiki/${animalName}`);
}

function displayResults(data) {
    let animalResults = JSON.stringify(data);
    results.textContent = animalResults
}