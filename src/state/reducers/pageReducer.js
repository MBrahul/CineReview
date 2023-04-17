const reducer =(state =1 , action)=>{
    if(action.type==="nextPage"){
        return state + action.payload;
    }
   else if(action.type==="previousPage"){
        return state - action.payload;
    }
    else if(action.type==="resetPage"){
        return 1;
    }
    else{
        return state;
    }
}

export default reducer;