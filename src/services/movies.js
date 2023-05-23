export default class MoviesApp {
  onHandleSubmit = (e) => {
    e.preventDefault();

    if (this.state.searchMovies.trim() !== '') {
      this.setState({ loading: true });

      setTimeout(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchMovies}`)
          .then((data) => data.json())
          .then((data) => {
            this.setState({ moviesData: [...data.results], loading: false });
          })
          .catch((error) => {
            console.log(error);
            this.setState({ loading: false });
          });
      }, 1500);
    }
  };
}
