//jshint esversion:6

let pokemonData =
    {
        count: 150,
        results: [
            {id: 1, name: "Bulbasaur"},
            {id: 2, name: "Ivysaur"},
            {id: 3, name: "Mew"},
            {id: 4, name: "Pikachu"},
            {id: 5, name: "Xiaohoalong"}
        ]
    }
/*
const fs = require("fs");
fs.readFile("./pokemonfile.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        return;
    }
    try {
        const pokemonObject = JSON.parse(jsonString);
        console.log("Pokemon name is:", pokemonObject.name); // => "Poke name is: Pikachu"
    } catch (err) {
        console.log("Error parsing JSON string:", err);
    }
});
*/

console.log("Pokemon server created.");
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from App Engine!');
});

app.get("/pokemon",
    function(request, response){
        response.send((pokemonData).results);
        //response.send(JSON.parse(pokemonData).results);
    }
);

app.get("/pokemon/:id",
    function(request, response){
        response.send((pokemonData).results[(request.params.id)-1]);
    }
);

/*
From Google Cloud app engine tutorial
Listen to the App Engine-specified port, or 8080 otherwise
Notice that if process.env.PORT is not set, port 8080 is used as a default.
This is necessary for testing your app locally, because process.env.PORT
doesn't get set during local runs - it is only set when your app is
running on App Engine. You can use whichever port you prefer for testing,
but this guide uses 8080.
*/

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

/*
//From Angela Yu's Course
app.listen(3000, function(){
    console.log("Server started on port 3000");
});
*/
