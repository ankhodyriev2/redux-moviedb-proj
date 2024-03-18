import React from 'react';
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {Grid} from "@mui/material";

const MoviesList = ({movies}) => {
    return (
        <Grid container spacing={2} sx={{marginTop: '30px'}}>
            {movies.map(movie => (
                <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                    <MoviesListCard movie={movie} />
                </Grid>
            ))}
        </Grid>
    );
};

export default MoviesList;
