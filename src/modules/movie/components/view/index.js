import './View.css';

function View({ movie }) {

    const getDurationTypeName = (durationType) => {

        if(!durationType) {
            return '';
        }

        switch(durationType) {
            case 'hh':
                return 'horas';
            case 'mm':
                return 'minutos';
            case 'ss':
                return 'segundos';
            default:
                return '';
        }
    }

    const getResolution = (resolutionWidth, resolutionHeight) => {
        if(!resolutionWidth || !resolutionHeight) {
            return '';
        }

        return `${resolutionWidth}x${resolutionHeight}`;
    }

    return (
        <div className="modal fade" id="selectedMovieModal" tabIndex="-1" aria-labelledby="selectedMovieModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="selectedMovieModalLabel">{movie.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="text-center">
                            <img src={ movie.image ? process.env.PUBLIC_URL + "/images/movies/" + movie.image : ''} width="40%" alt={movie.title} />
                        </div>
                        <p className="mt-3">{movie.sypnosis}</p>
                        <div className="row row-cols-md-2 g-1">
                            <div className="col"><strong>Titulo Original:</strong></div>
                            <div className="col"><p>{movie.originalTitle}</p></div>
                            <div className="col"><strong>Año:</strong></div>
                            <div className="col"><p>{movie.year}</p></div>
                            <div className="col"><strong>Duración:</strong></div>
                            <div className="col"><p>{movie.duration + " " + getDurationTypeName(movie.durationType)}</p></div>
                            <div className="col"><strong>Género:</strong></div>
                            <div className="col"><p>{movie.genres?.map((genre, index) => index !== movie.genres.length-1 ? genre + ", " : genre )}</p></div>
                            <div className="col"><strong>Idioma:</strong></div>
                            <div className="col"><p>{movie.languages?.map((language, index) => index !== movie.languages.length-1 ? language + ", " : language )}</p></div>
                            <div className="col"><strong>Resolución:</strong></div>
                            <div className="col">{getResolution(movie.resolutionWidth, movie.resolutionHeight)}</div>
                            <div className="col"><strong>Peso:</strong></div>
                            <div className="col">{movie.size + " " + movie.sizeType}</div>
                            <div className="col"><strong>Formato:</strong></div>
                            <div className="col">{movie.format}</div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View;