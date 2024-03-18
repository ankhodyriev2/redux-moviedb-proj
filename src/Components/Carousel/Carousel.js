import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './Carousel.css';

// import required modules
import {Autoplay} from 'swiper/modules';
import {BACKDROP_URL, IMAGE_URL} from "../../Config/Config";
import {Link} from "react-router-dom";

const Carousel = ({movies}) => {
    const filterMoviesBanner = movies.filter(movie => movie.backdrop_path !== null)
    return (
        <>
            <>
                <Swiper
                    loop={false}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        filterMoviesBanner.map(movie => (
                            <SwiperSlide key={movie.id}>
                                <div className='carousel-img' style={
                                    {
                                        backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})`,
                                    }
                                }>
                                    <Link to={`/movie/${movie.id}`}>
                                        <div className='carousel-poster'>
                                            <img src={`${IMAGE_URL}${movie.poster_path}`} alt="" className='carousel-poster__img' />
                                            <div>
                                                <h2>{movie.title}</h2>
                                                <p>Рейтинг: {movie.vote_average}</p>
                                                <p>{movie.overview}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </>
        </>
    );
};

export default Carousel;