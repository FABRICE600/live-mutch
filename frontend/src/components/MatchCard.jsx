export default function MatchCard({item,sport}){
const home=item.homeTeam?.name||item.teams?.home?.name||item.teams?.home||item.team1||item.name||'Home team';
const away=item.awayTeam?.name||item.teams?.away?.name||item.teams?.away||item.team2||'';
const h=item.score?.fullTime?.home??item.home_score??item.score?.home??'-',a=item.score?.fullTime?.away??item.visitor_score??item.score?.away??'-';
return <article className="match-card"><div className="match-meta"><span>{sport}</span><span>{item.status||item.state||item.matchType||'Scheduled'}</span></div><div className="teams"><div className="team"><b>{home}</b></div><strong className="score">{h} <i>:</i> {a}</strong><div className="team away"><b>{away}</b></div></div><div className="match-foot">{item.utcDate?new Date(item.utcDate).toLocaleString():item.date||item.dateTimeGMT||'Schedule supplied by provider'}</div></article>
}
