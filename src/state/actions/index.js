export  const nextPage =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"nextPage",
            payload:amount
        });
    }
}

export  const previousPage =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"previousPage",
            payload:amount
        });
    }
}

export  const resetPage =()=>{
    return(dispatch)=>{
        dispatch({
            type:"resetPage",
            payload:1
        });
    }
}


export  const setTotalPages =(total_pages)=>{
    return(dispatch)=>{
        dispatch({
            type:"setTotalPages",
            payload:total_pages
        });
    }
}

export const searchString=(searchString)=>{
    return(dispatch)=>{
        dispatch({
            type:"search",
            payload:searchString
        })
    }
}

export const updateMovies=(Movies)=>{
    return(dispatch)=>{
        dispatch({
            type:"updateMovies",
            payload:Movies
        })
    }
}


export const updateGenres=(genres)=>{
    return(dispatch)=>{
        dispatch({
            type:"updateGenres",
            payload:genres
        })
    }
}

export const updateSearching=(bool)=>{
    return(dispatch)=>{
        dispatch({
            type:"updateSearching",
            payload:bool
        })
    }
}

export const setProgress=(progress)=>{
    return(dispatch)=>{
        dispatch({
            type:"setProgress",
            payload:progress
        })
    }
}

export const setGridView=(bool)=>{
    return(dispatch)=>{
        dispatch({
            type:"setGridView",
            payload:bool
        })
    }
}

export const setFlexView=(bool)=>{
    return(dispatch)=>{
        dispatch({
            type:"setFlexView",
            payload:bool
        })
    }
}


