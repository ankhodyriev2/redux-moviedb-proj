import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../../Redux/Actions/MovieAction';
import MoviesList from '../../Components/MoviesList/MoviesList';
import {useNavigate, useLocation} from 'react-router-dom';
import queryString from 'query-string';
import {Container, Pagination} from "@mui/material";
import Carousel from "../../Components/Carousel/Carousel";


const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    // @ts-expect-error TS(2339): Property 'movies' does not exist on type 'unknown'... Remove this comment to see the full error message
    const movies = useSelector((state) => state.movies);

    // Отримати значення параметру "page" зі строки запитів
    const queryParams = queryString.parse(location.search);
    // @ts-expect-error TS(2345): Argument of type 'string | string[]' is not assign... Remove this comment to see the full error message
    const currentPageFromQuery = parseInt(queryParams.page, 10) || 1;

    const [currentPage, setCurrentPage] = useState(currentPageFromQuery);

    // Беремо useEffect для започаткування початкового значения currentPage
    useEffect(() => {
        setCurrentPage(currentPageFromQuery);
    }, [currentPageFromQuery]);

    // Далі useEffect для оновлення переліку фільмів при зміні currentPage
    useEffect(() => {
        // @ts-expect-error TS(2345): Argument of type '(dispatch: any) => void' is not ... Remove this comment to see the full error message
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