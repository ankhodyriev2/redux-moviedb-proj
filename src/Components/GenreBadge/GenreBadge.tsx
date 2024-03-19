import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../Redux/Actions/MovieAction";
import {Link} from "react-router-dom";
import './GenreBadge.css'

const GenreBadge = () => {
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);
    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch]);
    return (
        <Box className={"genres-list"}>
            {
                genres.map(genre => (
                    <Box className={"genre-link"}  key={genre.id}>
                        <Link to={`/genres/${genre.id}`}>
                            {genre.name.toUpperCase()}
                        </Link>
                    </Box>
                ))
            }
        </Box>
    );
};

export default GenreBadge;