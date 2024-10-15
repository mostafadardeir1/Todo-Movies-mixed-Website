import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import { LangContext } from "../utils/lang_context";
import Card from 'react-bootstrap/Card';

export default function MovieDetails() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const { lang } = useContext(LangContext);


    async function fetchMovieDetails() {
        try {
            const res = await axiosInstance.get('movie/' + id)
            console.log(res.data);
            setMovieDetails(res.data)
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => { fetchMovieDetails() }, [])

    return (
        <>
            <Card dir={lang == "en" ? "ltr" : "rtl"} className="bg-dark text-white">
                <Card.Img style={{ opacity: '.3' }} src={`https://image.tmdb.org/t/p/w1280/${movieDetails.poster_path}`} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{movieDetails.title}</Card.Title>
                    <Card.Text>
                        {movieDetails.overview}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}
