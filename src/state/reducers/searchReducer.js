
const reducer =(state ="" , action)=>{
    if(action.type==="search"){
        return action.payload;
    }
    else{
        return state;
    }
}

export default reducer;