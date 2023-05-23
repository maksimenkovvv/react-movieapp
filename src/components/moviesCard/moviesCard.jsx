import React, { Component } from 'react';
import { format } from 'date-fns';
import { Tag, Rate } from 'antd';

import { GenresConsumer } from '../movies-context/genres-context';
import Spinner from '../spinner/spinner';
import './moviesCard.css';

export default class MoviesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgLoading: false,
      starsRate: 0,
    };
  }
  handleImageLoaded = () => {
    this.setState({ imgLoading: true });
  };

  render() {
    const { path, title, date, overview, voteAverage } = this.props;
    const { imgLoading } = this.state;
    let color;
    if (voteAverage > 7) {
      color = '#66E900';
    } else if (voteAverage >= 5) {
      color = '#E9D100';
    } else if (voteAverage >= 3) {
      color = '#E97E00';
    } else {
      color = 'tomato';
    }

    let poster =
      path == null
        ? 'https://www.formulatv.com/images/carteltvmovies_m1.jpg'
        : `https://image.tmdb.org/t/p/w500${path}`;
    return (
      <GenresConsumer>
        {(genres) => {
          return (
            <div className="ant-card">
              <div className="ant-item">
                <div className="ant-image">
                  {!imgLoading && <Spinner />}
                  <img
                    src={poster}
                    alt="movie-poster"
                    style={{ display: imgLoading ? 'block' : 'none' }}
                    onLoad={this.handleImageLoaded}
                  />
                </div>
                <div className="ant-card__all">
                  <div className="ant-info">
                    <h3>{title}</h3>
                    <div className="ant-grade" style={{ border: `2px solid ${color}` }}>
                      <span>{voteAverage.toFixed(1)}</span>
                    </div>
                  </div>
                  <div>
                    <span className="ant-date">{date ? format(new Date(date), 'MMMM d, yyyy') : 'none'}</span>
                    <span className="ant-genres">
                      {this.props.genre.map((el) => {
                        const textGenre = genres.find((gen) => {
                          if (gen.id === el) return gen.name;
                        });
                        console.log(genres);
                        return <Tag key={el}> {textGenre.name}</Tag>;
                      })}
                    </span>
                  </div>
                  <div className="ant-overview">{overview}</div>
                  <Rate defaultValue={0} count={10} />
                </div>
              </div>
            </div>
          );
        }}
      </GenresConsumer>
    );
  }
}
