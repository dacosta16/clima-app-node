const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=85cb945bc998ae9a55aa29d116a6c3c8&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
};