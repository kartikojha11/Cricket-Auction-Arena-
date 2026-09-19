export const GAME={INITIAL_BUDGET:500,AUCTION_SECONDS:30,BID_RESET_SECONDS:10,MIN_PLAYERS:3,MAX_PLAYERS:5};
export const makePlayerState=(id,name,teamSize)=>({id,name,teamSize,budget:GAME.INITIAL_BUDGET,spent:0,squad:[],connected:true,submitted:false});
