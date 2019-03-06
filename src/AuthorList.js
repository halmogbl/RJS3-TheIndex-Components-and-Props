import React, { Component } from "react";

import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    let Cards = this.props.authors.map(_author => (
      <AuthorCard author_card_value={_author} />
    ));
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{Cards}</div>
      </div>
    );
  }
}

export default AuthorList;
