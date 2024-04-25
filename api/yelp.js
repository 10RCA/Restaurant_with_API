import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer hB3PJ15ohgpORiT_X1EbIDX1u5MR2Gtez3yYzRSrVSvyoFnZXVHhzuD6paNIX-TuMADmeTg2zL-a_0BDYeaPJvzPgti273GGAToovDjgAnsg6PADMvvDurr5het4ZXYx',
    },
    //yelp kısmında
});
