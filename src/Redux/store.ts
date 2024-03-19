import {applyMiddleware, createStore} from "redux";
import {moviesReducer} from "./MovieReducer/MovieReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = createStore(
    moviesReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()