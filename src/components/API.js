// Imports
import axios from "axios";

const url = 'https://randomuser.me/api/?results=50';

//api call
export default {

    ApiSearch: function () {
        console.log(url)
        axios.get(url)
            .then(res => {
                console.log(res.data.results)
            
                return res
            }) 
    }
}

