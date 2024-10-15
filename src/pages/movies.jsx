import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MoviesThunkAction } from '../utils/movies_slice'
import { StringManager } from '../utils/stringmanager';
import { LangContext } from '../utils/lang_context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Movies() {
    const { lang } = useContext(LangContext);
    const navigate = useNavigate()
    const popularMovies = useSelector(state => state.homeMovies.movies)
    const moviesDispatch = useDispatch()

    useEffect(() => {
        moviesDispatch(MoviesThunkAction())
    }, [])

    return (
        <>
            <div dir={lang == "en" ? "ltr" : "rtl"}>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        {popularMovies.map((movie) => {
                            return (
                                <>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} />
                                        <Card.Body>
                                            <Card.Title>{movie.title}</Card.Title>
                                            <Button variant="primary" onClick={() => { navigate(`/moviedetails/${movie.id}`) }}>
                                                {lang == 'en' ? StringManager.viewdetails.en : StringManager.viewdetails.ar}
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
