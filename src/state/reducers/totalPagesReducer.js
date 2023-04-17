const reducer =(state =0 , action)=>{
    if(action.type==="setTotalPages"){
        return action.payload; 
    }
    else{
        return state;
    }
}

export default reducer;

