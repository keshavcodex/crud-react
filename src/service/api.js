import axios from 'axios';

const URL = '';

export const addUser = () =>{
    try{
        axiox.post(URL);
    } catch (error) {
        console.log("Error while calling add user api", error);
    }
}

facbepo