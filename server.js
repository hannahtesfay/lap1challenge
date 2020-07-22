 const express = require('express');
 const server = express();
 const cors = require('cors');
 const port = 3000;
 server.use(cors());

//  const animals = [
//      "Giraffe - https://en.wikipedia.org/wiki/Giraffe",
//      "Fox - https://en.wikipedia.org/wiki/Fox",
//      "Elephant - https://en.wikipedia.org/wiki/Elephant",
//      "Gazelle - https://en.wikipedia.org/wiki/Gazelle",
//      "Zebra - https://en.wikipedia.org/wiki/Zebra",
//  ]

//  const animalLinks = [
//     "https://en.wikipedia.org/wiki/Giraffe",
//     "https://en.wikipedia.org/wiki/Fox",
//     "https://en.wikipedia.org/wiki/Elephant",
//     "https://en.wikipedia.org/wiki/Gazelle",
//     "https://en.wikipedia.org/wiki/Zebra",
// ]


let animals = [
    {
        name: "giraffe",
        link: "https://en.wikipedia.org/wiki/Giraffe"
    }, 
    {
        name: "fox",
        link: "https://en.wikipedia.org/wiki/Fox"
    },
    {
        name: "elephant",
        link: "https://en.wikipedia.org/wiki/Elephant"
    },
    {
        name: "gazelle",
        link: "https://en.wikipedia.org/wiki/Gazelle"
    },
    {
        name: "zebra",
        link: "https://en.wikipedia.org/wiki/Zebra"
    }
];

 // response at root page
 server.get(`/`, (req, res) => res.send('hello world'));

 // response when searching
 server.get('/animals', (req, res) => res.send(animals));
//  server.get('/search', (req, res) => res.send(JSON.stringify(animals)))
 server.get('/search', (req, res) => {
     let searchquery = req.query.q;
     let options = animalSearchResults(searchquery);
     options.length > 0
        ? res.send(JSON.stringify(options.slice(0, 10)))
        : res.send(JSON.stringify("Please try another search term! - hint (giraffe, fox, elephant, gazelle or zebra)"));
 });
 server.get('/links', (req, res) => res.send(JSON.stringify(animalLinks)))

 // response for I'm feeling lucky
 server.get('/lucky', (req, res) => res.send(JSON.stringify(animalLinks[(Math.floor(Math.random()*5))])))

 // get server to run
 server.listen(port, () => console.log(`Express running at http://localhost:${port}`))

 const animalSearchResults = (searchquery) => {
     return animals.filter(
         (animal) =>
            animal.name.includes(searchquery) ||
            animal.link.includes(searchquery)
     );
 }