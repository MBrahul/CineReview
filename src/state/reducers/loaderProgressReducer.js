
const reducer =(state =0 , action)=>{
    if(action.type==="setProgress"){
        return state + action.payload;
    }
    else{
        return state;
    }
}

export default reducer;