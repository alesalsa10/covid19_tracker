import axios from 'axios';

let url = 'https://covid19.mathdro.id/api';

export const httpHook = async ()=>{
    try{
        const response = await axios.get(url);
        return response;
    }catch(error){
        console.log('error', error);
    }
}

export const dailyData = async() => {
    try{
        const response = await axios.get(`${url}/daily`);
        return response
    }catch(error){
        console.log(error)
    }
}
