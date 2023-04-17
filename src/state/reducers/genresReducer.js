const reducer=(state="popular",action)=>{
    if(action.type==="updateGenres"){
        return action.payload;
    }
    else{
        return state;
    }
}

export default reducer;