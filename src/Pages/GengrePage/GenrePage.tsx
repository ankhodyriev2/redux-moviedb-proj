import React, {useEffect} from 'react';
import {Container} from "@mui/material";
import GenreBadge from "../../Components/GenreBadge/GenreBadge";
import {useDispatch, useSelector} from "react-redux";
import {getMovieByGenre} from "../../Redux/Actions/MovieAction";
import {useParams} from "react-router-dom";
import MoviesList from "../../Components/MoviesList/MoviesList";

const GenrePage = () => {
    const dispatch = useDispatch()
    // @ts-expect-error TS(2339): Property 'movies' does not exist on type 'unknown'... Remove this comment to see the full error message
    const movies = useSelector(state => state.movies)
    const {id} = useParams()
    useEffect(() => {
        // @ts-expect-error TS(2345): Argument of type '(dispatch: any) => void' is not ... Remove this comment to see the full error message
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