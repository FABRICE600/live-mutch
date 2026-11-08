import {useEffect,useState} from 'react';
import {request} from '../api/client';
import MatchCard from './MatchCard';
export default function SportSection({title,path,sport,description,query}){
const [data,setData]=useState(null),[loading,setLoading]=useState(true),[error,setError]=useState('');
useEffect(()=>{let active=true;setLoading(true);setError('');request(path).then(v=>{if(active)setData(v)}).catch(e=>{if(active)setError(e.response?.data?.message||e.message||'Could not load provider data')}).finally(()=>{if(active)setLoading(false)});return()=>{active=false}},[path]);
const items=Array.isArray(data)?data:data?.matches||data?.data||data?.response||data?.items||data?.result||[];
const filtered=items.filter(x=>JSON.stringify(x).toLowerCase().includes(query.toLowerCase()));
return <section className="sport-section"><div className="section-heading"><div><p className="eyebrow">{sport} CENTER</p><h2>{title}</h2><p>{description}</p></div><span className="live-dot">PROVIDER DATA</span></div>{loading?<div className="notice">Loading {sport} data…</div>:error?<div className="notice error">{error}. Check your API key, subscription and backend logs.</div>:filtered.length?<div className="match-grid">{filtered.slice(0,8).map((m,i)=><MatchCard key={m.id||m.fixture?.id||i} item={m} sport={sport}/>)}</div>:<div className="notice">No {sport.toLowerCase()} matches were returned by the provider. No results are fabricated.</div>}</section>
}
