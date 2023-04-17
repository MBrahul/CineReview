const reducer =(state=false,action)=>{
    if(action.type==='updateSearching'){
        return action.payload;
    }   
    else{
        return state;
    }
}

export default reducer;