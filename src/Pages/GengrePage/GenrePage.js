import React, {useEffect} from 'react';
import {Container} from "@mui/material";
import GenreBadge from "../../Components/GenreBadge/GenreBadge";
import {useDispatch, useSelector} from "react-redux";
import {getMovieByGenre} from "../../Redux/Actions/MovieAction";
import {useParams} from "react-router-dom";
import MoviesList from "../../Components/MoviesList/MoviesList";

const GenrePage = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)
    const {id} = useParams()
    useEffect(() => {
        dispatch(getMovieByGenre(id))
    }, [dispatch, id])
    return (
        <Container>
            <GenreBadge />
            <MoviesList movies={movies} />
        </Container>
    );
};

export default GenrePage;