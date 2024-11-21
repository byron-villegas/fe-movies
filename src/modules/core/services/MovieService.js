import axios from 'axios';

import configuration from '../config/configuration';

const getMovies = () => {
    const options = {
        headers: {
            'accept': '*/*',
            'content-type': 'application/json'
        }
    };

    return axios.get(`${configuration.api}/movies`, options);
}

export { getMovies };