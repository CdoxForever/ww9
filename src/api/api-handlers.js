import axios from 'axios';

const db_url = 'https://super-student-4ccea-default-rtdb.firebaseio.com'

export const getItems = () => {
    return axios.get(`${db_url}/questions.json`)
        .then(response => {
            const questions = Object.keys(response.data)
            .map( key => ({...response.data[key]}))
            console.log(questions);

            return questions
        })
}