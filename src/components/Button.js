import React from 'react';

class Button extends React.Component {
  render() {
    const {
      title,
      onClick,
      type,
      className,
      labelValue="",
    } = this.props;
    return(
      <label>
        { labelValue }
        <button className={ className } type={ type } onClick={ onClick } >{ title }</button>
      </label>
    );
  }
}

export default Button;
