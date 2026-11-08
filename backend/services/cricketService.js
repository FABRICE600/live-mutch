const axios=require('axios');
exports.live=async()=>{if(!process.env.CRICKET_API_KEY)throw Error('CRICKET_API_KEY is not configured');const r=await axios.get('https://api.cricapi.com/v1/currentMatches',{params:{apikey:process.env.CRICKET_API_KEY,offset:0},timeout:15000});if(r.data?.status==='failure')throw Error(r.data.reason||'Cricket provider request failed');return r.data};
