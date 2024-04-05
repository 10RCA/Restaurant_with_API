import { useEffect } from "react";

export default ()=>{

const searhApi = async(searchTerm) => {
    await yelp.get('/search',{
        params:{
            limit:50,
            term: searchTerm,
            location: 'İstanbul',

        }
    })

}
    useEffect(()=>{
    searhApi('Toast');
}, []);
    return[searhApi];
};