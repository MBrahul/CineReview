import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import searchReducer from './searchReducer';
import movieReducer from './movieReducer';
import genresReducer from "./genresReducer";
import totalPagesReducer from './totalPagesReducer';
import searchingReducer from './searchingReducer';
import loaderProgressReducer from './loaderProgressReducer';
import gridViewReducer from './gridViewReducer';
import flexViewReducer from './flexViewReducer';

const reducers = combineReducers({
    page:pageReducer,
    totalPages:totalPagesReducer,
    searchString:searchReducer,
    movies:movieReducer,
    genres:genresReducer,
    searching:searchingReducer,
    progress:loaderProgressReducer,
    gridView:gridViewReducer,
    flexView:flexViewReducer,
});

export default reducers;