import {GET_GENRES, GET_MOVIE_BY_ID, GET_MOVIES} from "../type";
import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3/`
const API_KEY = `db0db81ba02a2eb52470ad910d9d6016`

//Переходимо між сторінками page{id}
export const getMovies = (id: number) => {
    return (dispatch) => {
        axios(`${BASE_URL}/discover/movie?page=${id}&api_key=${API_KEY}&language=uk`)

            .then(({data}) => {
                dispatch({type: GET_MOVIES, payload: data})
            })
    }
}

const getMovieById = (id) => {
    return dispatch => {
        axios(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=uk`)
            .then(({data}) => {
                dispatch({type: GET_MOVIE_BY_ID, payload: data})
            })
    }
}
export {getMovieById}

const clearMovie = () => {
    return dispatch => {
        dispatch({type: GET_MOVIE_BY_ID, payload: {}})
    }
}
export {clearMovie}

const clearMovies = () => {
    return dispatch => {
        dispatch({type: GET_MOVIES, payload: []})
    }
}
export {clearMovies}

const getGenres = () => {
    return dispatch => {
        axios(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=uk`)
            .then(({data}) => {
                dispatch({type: GET_GENRES, payload: data})
            })
    }
}
export {getGenres}

const getMovieByGenre = (genre) => {
    return dispatch => {
        axios(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=uk&with_genres=${genre}`)
            .then(({data}) => {
                dispatch({type: GET_MOVIES, payload: data})
            })
    }
}
export {getMovieByGenre}

