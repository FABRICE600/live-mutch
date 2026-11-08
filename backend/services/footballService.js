const {football}=require('../config/apiConfig');
exports.live=async()=>(await football.get('/matches',{params:{status:'LIVE'}})).data;
exports.fixtures=async(date=new Date().toISOString().slice(0,10))=>(await football.get('/matches',{params:{dateFrom:date,dateTo:date}})).data;
exports.results=async()=>(await football.get('/matches',{params:{status:'FINISHED'}})).data;
exports.competitions=async()=>(await football.get('/competitions')).data;
exports.standings=async(code='PL')=>(await football.get('/competitions/'+encodeURIComponent(code)+'/standings')).data;
exports.teams=async(code='PL')=>(await football.get('/competitions/'+encodeURIComponent(code)+'/teams')).data;
