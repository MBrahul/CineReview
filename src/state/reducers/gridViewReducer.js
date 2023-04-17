
const reducer = ( state =true , action )=>{
    if(action.type==="setGridView"){
        return action.payload;
    }
    else{
        return state;
    }
}

export default reducer;