import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import "./FoodBox.css"

export default class FoodBox extends Component {
  constructor() {
    super()


  }
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.url} alt={this.props.name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calorias}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value="1"
                />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
              </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
