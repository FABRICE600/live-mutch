const {basketball}=require('../config/apiConfig');
exports.games=async date=>(await basketball.get('/games',{params:date?{'dates[]':date}:{}})).data;
exports.teams=async()=>(await basketball.get('/teams')).data;
exports.players=async()=>(await basketball.get('/players/active')).data;
