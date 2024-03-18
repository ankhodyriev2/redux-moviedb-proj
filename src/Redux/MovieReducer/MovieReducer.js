import {
    CLEAR_MOVIE,
    CLEAR_MOVIES,
    GET_GENRES,
    GET_MOVIE_BY_ID,
    GET_MOVIE_TRAILER,
    GET_MOVIES,
    GET_MOVIES_BY_GENRE
} from "../type";

const initialState = {
    movies: [],
    movie: {},
    genres: [],
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, movies: action.payload.results};
        case GET_MOVIE_BY_ID:
            return {...state, movie: action.payload};
        case GET_MOVIE_TRAILER:
            return {...state, movieTrailer: action.payload};
        case CLEAR_MOVIE:
            return initialState;
        case CLEAR_MOVIES:
            return initialState;
        case GET_GENRES:
            return {...state, genres: action.payload.genres};
        case GET_MOVIES_BY_GENRE:
            return {...state, movies: action.payload.results};
        default:
            return state;
    }
};