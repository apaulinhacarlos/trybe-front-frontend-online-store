import React from 'react';
import StarsRating from './StarsRating'

class Comment extends React.Component {
  render() {
    const {
      email,
      comment = "",
      rate,
      className,
    } = this.props;

    return (
      <section className={ className }>
        <div>
          <span>{ email }</span>
          <StarsRating rate={ rate } />
        </div>
        <p>{ comment }</p>
      </section>
    );
  }
}

export default Comment;
