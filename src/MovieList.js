import React from 'react';
import PropTypes from 'prop-types';

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

function MovieList({ movies }) {
  return (
    <div>
      {movies && movies.map(movie => {
        return <Movie
          movie={movie}
        />
      })}
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};
function Movie({ movie }) {
  const { id, title, year,  summary, genres, rating, medium_cover_image  } = movie;
  return (
    <div key={id}>
      <h4>{title}</h4>
      <img src={medium_cover_image} />
      <div>{rating}/5.0</div>
      <div>{year}년 작품, 장르: {genres}</div>
      <div>{summary}</div>
    </div>
  );
}

export default MovieList;
