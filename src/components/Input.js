import React from 'react';

class Input extends React.Component {
  render() {
    const { value, type, placeholder, onChange } = this.props;
    return (
      <input value={ value } type={ type } placeholder={ placeholder } onChange={ (e) => onChange(e) } />
    );
  }
}

export default Input;
