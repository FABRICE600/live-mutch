const axios=require('axios');
exports.live=async()=>{if(!process.env.TENNIS_API_KEY)throw Error('TENNIS_API_KEY is not configured');const r=await axios.get('https://api.api-tennis.com/tennis/',{params:{method:'get_livescore',APIkey:process.env.TENNIS_API_KEY},timeout:15000});if(r.data?.success===0)throw Error(r.data.error||'Tennis provider rejected the request');return r.data};
