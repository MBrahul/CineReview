const reducer =(state =[] , action)=>{
    if(action.type==="updateMovies"){
        return action.payload;
    }
  
    else{
        return state;
    }
}

export default reducer;