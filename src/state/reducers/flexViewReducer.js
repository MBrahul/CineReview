

const reducer =(state = false , action)=>{
    if(action.type==="setFlexView"){
        return action.payload;
    }
    else{
        return state;
    }
}

export default reducer;

