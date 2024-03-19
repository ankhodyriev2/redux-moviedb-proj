import {applyMiddleware, createStore} from "redux";
import {moviesReducer} from "./MovieReducer/MovieReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";

export const store = createStore(
    moviesReducer,
    composeWithDevTools(applyMiddleware(thunk))
);