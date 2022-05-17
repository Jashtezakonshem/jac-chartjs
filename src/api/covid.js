import axios from 'axios';

export const getCovidDataForDay = async (day) => {
   try {
       const { data } = await  axios.get(`/${day}.json`)
       return data
   } catch (e) {

   }
}
