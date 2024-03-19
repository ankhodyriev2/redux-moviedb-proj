import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../Redux/Actions/MovieAction";
import {Link} from "react-router-dom";
import './GenreBadge.css'

const GenreBadge = () => {
    const dispatch = useDispatch();
    // @ts-expect-error TS(2339): Property 'genres' does not exist on type 'unknown'... Remove this comment to see the full error message
    const genres = useSelector(state => state.genres);
    useEffect(() => {
        // @ts-expect-error TS(2345): Argument of type '(dispatch: any) => void' is not ... Remove this comment to see the full error message
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