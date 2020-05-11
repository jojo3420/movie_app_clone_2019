import React from 'react';
import MovieList from "./MovieList";
import axios from 'axios';


// const movies = [
//   {
//     id: 1,
//     title: '바람과 함께 사라지다.',
//     author: '김감독',
//     rating: 5.0,
//   },
//   {
//     id: 2,
//     title: '명량대전',
//     author: '박감독',
//     rating: 4.5,
//   },
//   {
//     id: 3,
//     title: '쌍화점',
//     author: '우감동',
//     rating: 4.5,
//   },
// ];

class App extends React.Component {

  state = {
    loading: true,
    movies: [],
     };

  fetch = async (url) => {
    const response = await axios.get(url);
    console.debug({response});
    // return response.data.data;
    this.setState({
      loading: false,
      movies: response.data.data.movies,
    });
  };

  componentDidMount() {
    const url = 'https://yts.mx/api/v2/list_movies.json';
    this.fetch(url);
  }

  render() {
    const { loading, movies } = this.state;
    return (
      <div className="App">
        <h1>Movie App</h1>
        <div>{loading ? 'loading..' : (
          <MovieList movies={movies} />
        )}</div>

      </div>
    );
  }

}

export default App;
