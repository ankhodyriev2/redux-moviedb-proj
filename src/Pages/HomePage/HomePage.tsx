import React, {useEffect, useState} from 'react';
import {getMovies} from '../../Redux/Actions/MovieAction';
import MoviesList from '../../Components/MoviesList/MoviesList';
import {useNavigate, useLocation} from 'react-router-dom';
import queryString from 'query-string';
import {Container, Pagination} from "@mui/material";
import Carousel from "../../Components/Carousel/Carousel";
import { useAppSelector, useAppDispatch } from '../../Redux/store';

const HomePage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const movies = useAppSelector((state) => state.movies);

    // Отримати значення параметру "page" зі строки запитів
    const queryParams = queryString.parse(location.search);
    const currentPageFromQuery = parseInt(queryParams.page as string, 10) || 1;

    const [currentPage, setCurrentPage] = useState(currentPageFromQuery);

    // Беремо useEffect для започаткування початкового значения currentPage
    useEffect(() => {
        setCurrentPage(currentPageFromQuery);
    }, [currentPageFromQuery]);

    // Далі useEffect для оновлення переліку фільмів при зміні currentPage
    useEffect(() => {
        dispatch(getMovies(currentPage));
    }, [dispatch, currentPage]);

    const totalPageCount = 10; //

    const handlePageChange = (event, newPage) => {
        event.preventDefault();
        setCurrentPage(newPage);
        // `navigate`
        navigate(`?page=${newPage}`);
    };

    return (
        <>
            <Carousel movies={movies}/>
            <Container>
                <MoviesList movies={movies}/>
                <Pagination
                    count={totalPageCount}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                    size="small"
                    style={{marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'center'}}
                />
            </Container>
        </>
    );
};

export default HomePage;