interface MoviesInfo{
    movies:{
        movieTitle:string;
        moviePrice:string;
        movieDescription:string;
        movieRating:number;
    }
}

const MoviesInfo = ({ movies }: MoviesInfo) => {
    const { movieTitle, moviePrice, movieDescription, movieRating } = movies;
  return (
    <div>
      <h1>{movieTitle}</h1>
      <p>Price: {moviePrice}</p>
      <p>Description: {movieDescription}</p>
      <p>Rating: {movieRating}</p>
    </div>
  )
}

export default MoviesInfo