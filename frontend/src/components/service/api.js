import axios from 'axios';

const URL = 'http://localhost:4000';

const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log('Error while calling add User Api', error);
    }
}

export default addUser;