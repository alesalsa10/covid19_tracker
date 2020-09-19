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
