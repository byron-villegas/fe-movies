import axios from 'axios';

import configuration from '../config/configuration';

const getMovies = () => {
    const options = {
        headers: {
            'accept': '*/*',
            'content-type': 'application/json'
        }
    };

    return axios.get(`${configuration.server.url}/${configuration.server.paths.movies}`, options);
}

export { getMovies };