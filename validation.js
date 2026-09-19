export const REQUIREMENTS={5:{Wicketkeeper:1,Batter:1,Bowler:1,"All-rounder":0},11:{Wicketkeeper:1,Batter:4,Bowler:3,"All-rounder":1}};
export function roleCounts(squad,playersById){const c={Wicketkeeper:0,Batter:0,Bowler:0,"All-rounder":0};for(const id of squad||[]){const p=playersById[id];if(p&&c[p.role]!==undefined)c[p.role]++}return c}
export function teamRequirements(teamSize,squad,playersById){const req=REQUIREMENTS[teamSize],counts=roleCounts(squad,playersById),missing=Object.fromEntries(Object.entries(req).map(([r,n])=>[r,Math.max(0,n-counts[r])]));const squadOk=(squad||[]).length===teamSize,rolesOk=Object.values(missing).every(v=>v===0);return{valid:squadOk&&rolesOk,counts,missing,squadOk,rolesOk}}
export function canBid({amount,currentBid,basePrice,budget}){const min=Math.max(basePrice,currentBid+5);return Number.isInteger(amount)&&amount>=min&&amount<=budget&&amount>=0}
export const canBuyPlayer=(squad,playerId)=>!(squad||[]).includes(playerId);
