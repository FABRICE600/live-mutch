const axios = require('axios');
const football = axios.create({baseURL:'https://api.football-data.org/v4',timeout:15000,headers:{'X-Auth-Token':process.env.FOOTBALL_API_KEY||''}});
const basketball = axios.create({baseURL:'https://api.balldontlie.io/v1',timeout:15000,headers:{Authorization:process.env.BASKETBALL_API_KEY||''}});
module.exports={football,basketball};
