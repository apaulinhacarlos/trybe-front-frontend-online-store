import React from 'react';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    const { title, onClick, type } = this.props;
    return(
      <button type={ type } onClick={ onClick } >{ title }</button>
    );
  }
}

export default Button;