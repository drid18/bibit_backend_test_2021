# bibit_backend_test_2021
## Task 2. Small ExpressJS Services

### Step 1. Install dependencies and start services
run npm install to install all dependency needed
```
npm install
```
to run unit test before start the server, running code below
```
npm run test
```
start script after installation & unit test
```
npm run start
```

### Step 2. Test /search API

- PUBLIC TEST

to test without runnig on local server, api's can be hit using url below:
```
//Search Public API
https://bibit.daridia.com/search?s=batman&y&page=1
//Detail Public API
https://bibit.daridia.com/detail?t=iron&y=2012
```

- LOCAL TEST

to get result search we can hit this api
```
http://localhost:3000/search?s=batman&y&page=1
```
#### Result:
the result should be like this
```
{
  "rc": "00",
  "rm": "success",
  "data": {
    "Search": [
      {
        "Title": "Batman Begins",
        "Year": "2005",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        "Title": "Batman v Superman: Dawn of Justice",
        "Year": "2016",
        "imdbID": "tt2975590",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      ...
    ],
    "totalResults": "470",
    "Response": "True"
  }
}
```

### Step 3. Test /detail API
to get result detail we can hit this api
```
http://localhost:3000/detail?t=iron&y=2012
```
#### Result:
the result should be like this
```
{
  "rc": "00",
  "rm": "success",
  "data": {
    "Title": "Iron Sky",
    "Year": "2012",
    "Rated": "R",
    "Released": "04 Apr 2012",
    "Runtime": "93 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Timo Vuorensola",
    "Writer": "Jarmo Puskala, Johanna Sinisalo, Michael Kalesniko",
    "Actors": "Julia Dietze, Christopher Kirby, Götz Otto",
    "Plot": "The Nazis set up a secret base on the dark side of the moon in 1945 where they hide out and plan to return to power in 2018.",
    "Language": "English, German",
    "Country": "Finland, Germany, Australia, France, Norway, Belgium, Denmark, United Kingdom",
    "Awards": "4 wins & 2 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM2MDg5MzgxNF5BMl5BanBnXkFtZTcwODUzNjMxOA@@._V1_SX300.jpg",
    ...
  }
}
```

### PARAM
  - `GET /search`
    - t = movie title
    - y = release year
    - p = page
  - `GET /detail`
    - t = movie title
    - y = release year
    - i = imdb id

in `GET /detail` if param `t` and `i` provided, then `t` will be used 




