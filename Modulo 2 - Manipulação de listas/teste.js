const axios = require('axios');

const people = { 
    async getPeople() {
        const url = 'https://swapi.dev/api/people/';
        const response = await axios.get(url);

        return response.data;
    }
}

people.getPeople()
    .then(result => console.log(result));