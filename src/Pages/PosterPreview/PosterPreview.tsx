import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {clearMovie, getMovieById} from "../../Redux/Actions/MovieAction";
import {Container, Grid, Typography} from "@mui/material";
import './PosterPreview.css'

const MoviePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    // @ts-expect-error TS(2339): Property 'movie' does not exist on type 'unknown'.
    const movie = useSelector((state) => state.movie);
    // @ts-expect-error TS(2339): Property 'production_companies' does not exist on ... Remove this comment to see the full error message
    const production_companies = useSelector(state => state.production_companies);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            // @ts-expect-error TS(2345): Argument of type '(dispatch: any) => void' is not ... Remove this comment to see the full error message
            await dispatch(getMovieById(id));
            navigate(`/movie/${id}`);
        };
        fetchMovieDetails();
        // @ts-expect-error TS(2345): Argument of type '(dispatch: any) => void' is not ... Remove this comment to see the full error message
        dispatch(clearMovie())
    }, [dispatch, navigate, id]);
    return (
        <Container>
            <Grid container spacing={2} sx={{marginTop: '30px', marginBottom: '30px'}} className={"movie-page"}>
                <Grid item xs={12} md={6}>
                    <img className={"movie-poster"} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                         alt={movie.title}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{marginBottom: '20px'}} variant={"h4"}>{movie.title}</Typography>
                    <Typography sx={{marginBottom: '20px'}} variant={"subtitle1"}>{movie.overview}</Typography>
                    <Typography sx={{marginBottom: '20px'}} variant={"subtitle2"}>Дата прем'єри: {movie.release_date}</Typography>
                    <Typography sx={{marginBottom: '20px'}} variant={"subtitle2"}>Оцінка користувачів: {movie.vote_average}</Typography>
                    <Typography sx={{marginBottom: '20px'}} variant={"subtitle2"}>Популярність:

                    </Typography>
                    <Typography sx={{marginBottom: '20px'}} variant={"subtitle2"}>Оцінок: {movie.vote_count}</Typography>

                </Grid>
            </Grid>
        </Container>
    );
}
export default MoviePage;