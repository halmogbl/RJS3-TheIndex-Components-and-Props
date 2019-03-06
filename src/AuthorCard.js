import React, { Component } from "react";

class AuthorCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={this.props.author_card_value.imageUrl}
              alt={
                this.props.author_card_value.first_name +
                " " +
                this.props.author_card_value.last_name
              }
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>
                {this.props.author_card_value.first_name +
                  " " +
                  this.props.author_card_value.last_name}
              </span>
            </h5>
            <small className="card-text">
              {this.props.author_card_value.books.length} books
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorCard;
