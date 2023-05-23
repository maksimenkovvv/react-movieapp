import React, { Component } from 'react';
import './spinner.css';

export default class Spinner extends Component {
  render() {
    return (
      <div className="loading-spinner">
        <div className="load-eclipse">
          <div></div>
        </div>
      </div>
    );
  }
}
