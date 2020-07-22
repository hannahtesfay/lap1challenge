 const express = require('express');
 const server = express();
 const cors = require('cors');
 const port = 3000;
 server.use(cors());

 const animalSearch = [
     "Giraffe - https://en.wikipedia.org/wiki/Giraffe",
     "Fox - https://en.wikipedia.org/wiki/Fox",
     "Elephant - https://en.wikipedia.org/wiki/Elephant",
     "Gazelle - https://en.wikipedia.org/wiki/Gazelle",
     "Zebra - https://en.wikipedia.org/wiki/Zebra",
 ]

 // response at root page
 server.get(`/`, (req, res) => res.send('hello world'));

 // response when searching
 server.get(`/search`, (req, res) => res.send(JSON.stringify(animalSearch)))

 // response for I'm feeling lucky
 server.get(`/lucky`, (req, res) => res.send(JSON.stringify(animalSearch[(Math.floor(Math.random()*5))])))

 // get server to run
 server.listen(port, () => console.log(`Express running at http://localhost:${port}`))