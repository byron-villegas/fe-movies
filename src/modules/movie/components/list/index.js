import './List.css';
import Core from '../../../core';
import View from '../view';
import { useState } from 'react';

function List() {
    
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState({id: 0, title: '', originalTitle: '', sypnosis: '', image: '', year: 0, duration: 0, durationType: '', resolutionWidth: 0, resolutionHeight: 0, size: 0.0, sizeType: '', format: ''});

    Core.MovieService.getMovies().then(resp => {
        setMovies(resp.data);
    })

    const selectMovie = (movie) => {
        console.log(movie);
        setSelectedMovie(movie);
    }

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
            {movies.map((movie, index) => 
            <div className="col mb-3" id={"movie-" + movie.title} key={'movie-' + (index + 1)}>
                <div className="card shadow-sm">
                    <img data-bs-toggle="modal" data-bs-target="#selectedMovieModal" className="bd-placeholder-img card-img-top cursor-pointer" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }} id={movie.title} src={process.env.PUBLIC_URL + "/images/movies/" + movie.image} alt={movie.title} title={movie.title} onClick={() => selectMovie(movie)} />
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="card-text"><strong>{movie.title}</strong></p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <div className="row">
                                    <span className="col-auto me-1" title={movie.title}>{movie.title}</span>
                                </div>
                            </div>
                            <small className="text-muted">#{movie.id}</small>
                        </div>
                    </div>
                </div>
            </div>
            )}
            <View movie={selectedMovie} />
        </div>
    );
}

export default List;