import axios from 'axios';

export const getUser = async (api) => {
    // return fetch(api)
    //     .then(res => res.json())

    return axios.get(api)
}
