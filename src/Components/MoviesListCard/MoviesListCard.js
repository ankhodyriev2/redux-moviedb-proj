import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Card, CardContent, CardMedia, Typography, Tooltip} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MoviesListCard = ({ movie }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{height: "100%", background: 'transparent'}}>
                <CardMedia
                    className={"card-media"}
                    component="img"
                    alt={movie.title}
                    image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <CardContent sx={{color: '#2B65EC'}}>
                    <Tooltip title={movie.title}>
                        <Typography noWrap={true} variant="h6" component="div">
                            {movie.title}
                        </Typography>
                    </Tooltip>
                    <Typography variant="subtitle2" color="#2B65EC">Дата виходу: {movie.release_date}</Typography>
                    <Typography variant="subtitle2" color="#2B65EC">Рейтинг: {movie.vote_average}</Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default MoviesListCard;
