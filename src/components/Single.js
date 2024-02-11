import React , {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from './Context';
import { NavLink } from 'react-router-dom';

const Single = () => {
    const { id } = useParams();
    const [isLoading , setIsLoading] = useState(true);
    const [movie , setMovies] = useState("");
    const[isError , setIsError] = useState({show : 'false' , msg : ""});

const  getMovies = async(url) => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.Response === 'True'){
        setIsLoading(false);
        setIsError({
            show :true,
            msg : "",
        });
        setMovies(data);
        }
        else{
            setIsError({
                show :true,
                msg : data.Error,
            });
        }
    } catch(error){
        console.log(error);
    }
};
useEffect(() => {
    let timerOut = setTimeout(() => {
        getMovies(`${API_URL}&i=${id}`);
    } , 800);
    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return(
      <div className='movie-section'>
        <div className='loading'>Loading....</div>
      </div>
    )
  }

  return (
    <section className="movie-section">
    <div className="movie-card">
      <figure>
        <img className="poster-image" src={movie.Poster} alt={movie.Title} />
      </figure>
      <div className="card-content">
        <p className="title">{movie.Title}</p>
        <div className="additional-info">
          <p className="info-item">Released: {movie.Released}</p>
          <p className="info-item">Genre: {movie.Genre}</p>
          <p className="info-item">IMDb Rating: {movie.imdbRating} / 10</p>
          <p className="info-item">Country: {movie.Country}</p>
        </div>
        <NavLink to="/" className="back-btn">
          Go Back
        </NavLink>
      </div>
    </div>
  </section>
  
  )
}

export default Single;
