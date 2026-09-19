export const nextAuctionState=({playerIds,currentIndex})=>{const nextIndex=currentIndex+1;return nextIndex>=playerIds.length?{done:true,playerIndex:nextIndex}:{done:false,playerIndex:nextIndex}};
