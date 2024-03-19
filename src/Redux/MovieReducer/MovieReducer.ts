import {
    CLEAR_MOVIE,
    CLEAR_MOVIES,
    GET_GENRES,
    GET_MOVIE_BY_ID,
    GET_MOVIE_TRAILER,
    GET_MOVIES,
    GET_MOVIES_BY_GENRE
} from "../type";


export interface Movie {
    adult: boolean,
    backdrop_path: string
    genre_ids: number[]
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

interface StoreState {
    movies: Movie[],
    movie: Movie,
    genres: [],
}

const initialState: StoreState = {
    movies: [],
    movie: {} as Movie,
    genres: [],
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, movies: action.payload.results as Movie[]};
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
            return {...state, movies: action.payload.results as Movie[]};
        default:
            return state;
    }
};